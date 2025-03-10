import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card as MuiCard, useTheme } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AttachmentIcon from "@mui/icons-material/Attachment";

const Card = ({ temporaryHideMedia }) => {
  const theme = useTheme();

  // Determine text and background colors based on theme mode
  const bgColor = theme.palette.mode === "dark" ? "#0B192C" : "#ffffff";
  const textColor = theme.palette.mode === "dark" ? "white" : "inherit";

  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
          overflow: "unset",
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
          <Typography color="inherit">Card Test 01</Typography>
        </CardContent>
      </MuiCard>
    );
  }

  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,0.2)",
        overflow: "unset",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.pinimg.com/736x/cc/9f/60/cc9f60f7fea009c75f138a07a9f14d74.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography color="inherit">Nguyen Dang Hoai Nam</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        <Button
          startIcon={<GroupIcon sx={{ color: textColor }} />}
          size="small"
          sx={{ color: textColor }}
        >
          20
        </Button>
        <Button
          startIcon={<ModeCommentIcon sx={{ color: textColor }} />}
          size="small"
          sx={{ color: textColor }}
        >
          15
        </Button>
        <Button
          startIcon={<AttachmentIcon sx={{ color: textColor }} />}
          size="small"
          sx={{ color: textColor }}
        >
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
