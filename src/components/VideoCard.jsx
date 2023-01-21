import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  mainRoute,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet: {
      thumbnails: {
        high: { url },
      },
      title,
      channelId,
      channelTitle,
    },
  },
}) => {
  return (
    <Card
      m={2}
      p={2}
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `${mainRoute}video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={url || demoThumbnailUrl}
          alt={title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "80px" }}>
        <Link to={videoId ? `${mainRoute}video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={channelId ? `${mainRoute}channel/${channelId}` : demoChannelUrl}
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
