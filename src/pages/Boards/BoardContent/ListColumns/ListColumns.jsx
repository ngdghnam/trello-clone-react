import React from "react";
import Box from "@mui/material/Box";
import Column from "./Column/Column";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const ListColumns = () => {
  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      <Column></Column>
      <Column></Column>

      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          height: "fit-content",
          mx: 2,
          borderRadius: "6px",
          backgroundColor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
            pl: 2.5,
            py: 1,
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumns;
