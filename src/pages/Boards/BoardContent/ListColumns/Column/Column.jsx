import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ListCards from "./ListCards/ListCards";
import { mapOrder } from "~/utils/sorts";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// import { useTheme } from "@mui/material/styles";

const Column = ({ column }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyles = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
  };

  // const theme = useTheme(); // Dynamically get the active theme
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
      {...listeners}
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
        // color: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#000"),
        borderRadius: "6px",
        ml: 2,
        height: "fit-content",
        maxHeight: (theme) =>
          `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(5)}
          )`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: (theme) => theme.trelloCustom.columnHeaderHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
            color: (theme) => theme.palette.primary.main,
          }}
        >
          {column?.title}
        </Typography>
        <Box>
          <Tooltip title="More options">
            <ExpandMoreIcon
              id="basic-column-dropdown"
              aria-controls={open ? "basic-menu-column-dropdown" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                color: (theme) => theme.palette.primary.main,
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-column-dropdown",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add New Card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive This Column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove This Column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* List Card */}
      <ListCards cards={orderedCards}></ListCards>

      {/* Footer */}
      <Box
        sx={{
          height: (theme) => theme.trelloCustom.columnFooterHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          startIcon={<AddCardIcon />}
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          Add New Card
        </Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
          ></DragHandleIcon>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Column;
