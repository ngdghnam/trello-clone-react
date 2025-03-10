import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";

function BoardContent() {
  // const theme = useTheme(); // Dynamically get the active theme

  return (
    <Box
      sx={{
        py: 1.5,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        height: (theme) => theme.trelloCustom.boardContentHeight,
      }}
    >
      <ListColumns></ListColumns>
    </Box>
  );
}

export default BoardContent;
