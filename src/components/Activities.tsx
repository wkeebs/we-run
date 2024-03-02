import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from "../utils/userData";

const Activities = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState({});

  const callRefresh = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`;

  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=`;

  // Use refresh token to get current access token
  useEffect(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, [callRefresh]);

  // use current access token to call all activities
  const getActivities = (access: string) => {
    // console.log(callActivities + access)
    fetch(callActivities + access)
      .then((res) => res.json())
      .then((data) => setActivities(data), setIsLoading(false))
      .catch((e) => console.log(e));
  };

  if (isLoading)
    return (
      <Typography variant="h3" color="#FFF">
        Loading ...
      </Typography>
    );

  return (
    <>
      <Box>
        <Typography variant="body1" color="#FFF">
          {activities.length} activities
        </Typography>
      </Box>
    </>
  );
};

export default Activities;
