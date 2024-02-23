import { Card, CardContent, Typography } from "@mui/material";

const ActivityCard = ({ details: { length, type } }) => {
  return (
    <Card variant="outlined" sx={{width: "250px", height: "150px", m: "15px"}}>
      <CardContent sx={{textAlign: "start"}}>
        <Typography variant="h3">{length} km</Typography>
        <Typography variant="body1">{type} run</Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
