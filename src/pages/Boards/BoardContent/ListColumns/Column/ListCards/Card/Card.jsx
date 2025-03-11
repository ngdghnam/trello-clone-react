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

const Card = ({ card }) => {
  const theme = useTheme();

  const shouldShowCardAction = () => {
    return (
      !!card?.memberIds?.length ||
      !!card?.comments?.length ||
      !!card?.attachments?.length
    );
  };

  // Determine text and background colors based on theme mode
  const bgColor = theme.palette.mode === "dark" ? "#0B192C" : "#ffffff";
  const textColor = theme.palette.mode === "dark" ? "white" : "inherit";

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
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, "&:last-child": { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() && (
        <CardActions sx={{ p: "0 4px 8px 4px" }}>
          {!!card?.memberIds?.length && (
            <Button
              startIcon={<GroupIcon sx={{ color: textColor }} />}
              size="small"
              sx={{ color: textColor }}
            >
              {card?.memberIds?.length}
            </Button>
          )}

          {!!card?.comments?.length && (
            <Button
              startIcon={<ModeCommentIcon sx={{ color: textColor }} />}
              size="small"
              sx={{ color: textColor }}
            >
              {card?.comments?.length}
            </Button>
          )}

          {!!card?.attachments?.length && (
            <Button
              startIcon={<AttachmentIcon sx={{ color: textColor }} />}
              size="small"
              sx={{ color: textColor }}
            >
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card;
