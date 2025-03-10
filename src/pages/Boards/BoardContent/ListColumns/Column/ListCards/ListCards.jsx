import React from "react";
import Box from "@mui/material/Box";
import Card from "./Card/Card";

const ListCards = () => {
  return (
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
      <Card></Card>
      <Card></Card>

      <Card temporaryHideMedia></Card>
    </Box>
  );
};

export default ListCards;
