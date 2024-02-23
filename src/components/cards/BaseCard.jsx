import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

const BaseCard = ({ title, content, info }) => {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 0, minHeight: "100px"}}
    >
      <CardActionArea sx={{ width: "100%", height: "100%" }}>
        <CardContent sx={{ textAlign: "start" }}>
          <Typography variant="subtitle2">{info}</Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BaseCard;
