import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const ActivityCard = ({ details: { distance, type } }) => {
  return (
    <Card variant="outlined" sx={{ width: "250px", height: "150px" }}>
      <CardActionArea sx={{width: "100%", height: "100%"}}>
        <CardContent sx={{ textAlign: "start" }}>
          <Typography variant="h5">{distance} km</Typography>
          <Typography variant="body2">{type} run</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActivityCard;
