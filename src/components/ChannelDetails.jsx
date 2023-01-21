import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Loader from "./Loader";
import Videos from "./Videos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) =>
      setChannelDetails(data.items)
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data.items)
    );
    console.log(videos);
  });

  if (!channelDetails || !channelDetails[0]?.snippet) return <Loader />;

  const {
    snippet: {
      thumbnails: {
        high: { url },
      },
      title,
      description,
    },
    statistics: { subscriberCount, videoCount },
  } = channelDetails[0];
  console.log(url);
  return (
    <Stack direction="column">
      <Box
        height="30vh"
        sx={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,37,164,0.6685267857142857) 35%, rgba(0,212,255,1) 100%)",
        }}
      >
        j
      </Box>

      <Box
        height="100%"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Stack direction="column" alignItems="center" color="white">
          <img
            src={url}
            alt="logo"
            height="150px"
            width="150px"
            style={{
              borderRadius: "50%",
              marginTop: "-50px",
            }}
          />

          <Typography mt={2} variant="body1" fontWeight="bold">
            {title}
          </Typography>
          <Typography width={{ xs: "100%", md: "50%" }} mx={2} variant="body2">
            {description}
          </Typography>
          <Stack direction="row" mt="4px" mb={4}>
            <Typography mr={2}>{videoCount} videos</Typography>
            <Typography>
              {parseInt(subscriberCount).toLocaleString()} subscribers
            </Typography>
          </Stack>
          <Videos videos={videos} align="center" />
        </Stack>
      </Box>
    </Stack>
  );
};

export default ChannelDetails;
