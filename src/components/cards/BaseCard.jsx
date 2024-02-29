import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

const BaseCard = ({ title, content, info, onClick }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 0, minHeight: "100px" }}>
      <CardActionArea onClick={onClick} sx={{ width: "100%", height: "100%" }}>
        <CardContent sx={{ textAlign: "start" }}>
          <Typography variant="caption">{info}</Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography component={"span"} variant="body2">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BaseCard;
