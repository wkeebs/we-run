import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";

export type HeaderCardProps = {
  rowNum: number
}

const HeaderCard: React.FC<HeaderCardProps> = ({ rowNum }) => {
  const [hover, setHover] = useState(false);

  const hoverHandleIcon = (
    <DragHandleIcon
      sx={{ opacity: hover ? 0.5 : 0, transition: "all 0.1s ease-in" }}
    />
  );

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 0, minHeight: "100px", background: "#cacaca" }}
    >
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
          {hoverHandleIcon}
          <CardContent sx={{ textAlign: "start", p: 0 }}>
            <Typography variant="h6">{rowNum}</Typography>
          </CardContent>
          {hoverHandleIcon}
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default HeaderCard;
