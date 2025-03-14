import React from "react";
import Box from "@mui/material/Box";
import Card from "./Card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const ListCards = ({ cards }) => {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: "0 5px",
          m: "0 5px",
          overflowX: "hidden",
          overflowY: "auto",
          maxHeight: (theme) => `calc(
              ${theme.trelloCustom.boardContentHeight} -
              ${theme.spacing(5)} -
              ${theme.trelloCustom.columnHeaderHeight} -
              ${theme.trelloCustom.columnFooterHeight}
            )`,
        }}
      >
        {cards?.map((card) => (
          <Card key={card._id} card={card}></Card>
        ))}
      </Box>
    </SortableContext>
  );
};

export default ListCards;
