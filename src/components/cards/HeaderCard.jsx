import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const HeaderCard = ({ rowNum }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card variant="outlined" sx={{ borderRadius: 0, minHeight: "100px" }}>
      <CardActionArea
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{ width: "100%", height: "100%" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <DragHandleIcon sx={{opacity: (hover ? 0.5 : 0)}}/>
          <CardContent sx={{ textAlign: "start", p: 0 }}>
            <Typography variant="h6">{rowNum}</Typography>
          </CardContent>
          <DragHandleIcon sx={{opacity: (hover ? 0.5 : 0)}}/>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default HeaderCard;
