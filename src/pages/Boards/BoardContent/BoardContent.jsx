import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
// import { useTheme } from "@mui/material/styles";

function BoardContent({ board }) {
  // const theme = useTheme(); // Dynamically get the active theme

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

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

  useEffect(() => {
    setorderedColumnsState(
      mapOrder(board?.columns, board?.columnOrderIds, "_id")
    );
  }, [board]);

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
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          py: 1.5,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          height: (theme) => theme.trelloCustom.boardContentHeight,
        }}
      >
        <ListColumns columns={orderedColumnsState}></ListColumns>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
