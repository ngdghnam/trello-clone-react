import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  // PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimation,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
// import { useTheme } from "@mui/material/styles";

import Column from "./ListColumns/Column/Column";
import Card from "./ListColumns/Column/ListCards/Card/Card";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD",
};

function BoardContent({ board }) {
  // const theme = useTheme(); // Dynamically get the active theme

  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });

  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  // const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  const [orderedColumnsState, setorderedColumnsState] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  useEffect(() => {
    setorderedColumnsState(
      mapOrder(board?.columns, board?.columnOrderIds, "_id")
    );
  }, [board]);

  const handleDragStart = (event) => {
    console.log("handleDragEnd", event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const handleDragEnd = (event) => {
    console.log("handleDragEnd", event);
    // console.log("Keo tha");
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      // Lấy vị trí cũ từ thằng active
      const oldIndex = orderedColumnsState.findIndex(
        (c) => c._id === active.id
      );

      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id);

      const dndOrderedColumns = arrayMove(
        orderedColumnsState,
        oldIndex,
        newIndex
      );

      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id);

      // Xử lý gọi API
      // console.log("dndOrderedColumns", dndOrderedColumns);
      // console.log("dndOrderedColumns", dndOrderedColumnsIds);

      setorderedColumnsState(dndOrderedColumns);

      setActiveDragItemId(null);
      setActiveDragItemType(null);
      setActiveDragItemData(null);
    }
  };

  // console.log("activeDragItemId", activeDragItemId);
  // console.log("activeDragItemType", activeDragItemType);
  // console.log("activeDragItemData", activeDragItemData);

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: "0.5" } },
    }),
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <Box
        sx={{
          py: 1.5,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          height: (theme) => theme.trelloCustom.boardContentHeight,
        }}
      >
        <ListColumns columns={orderedColumnsState}></ListColumns>
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData}></Column>
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <Card card={activeDragItemData}></Card>
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
