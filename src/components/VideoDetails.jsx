import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { demoChannelUrl, mainRoute } from "../utils/constants";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Comments from "./Comments";
import Loader from "./Loader";
import Videos from "./Videos";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
      setComments(data.items)
    );
    console.log(videoDetail);
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      minHeight="95vh"
      px={{
        sx: 0,
        md: 4,
      }}
    >
      <Stack direction={{ xs: "column", md: "row" }} justifyContent="center">
        <Box>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
          />
          <Typography variant="h5" p={2} fontWeight="bold" color="white">
            {title}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            px={2}
            sx={{ color: "white" }}
          >
            <Link
              to={
                channelId ? `${mainRoute}channel/${channelId}` : demoChannelUrl
              }
            >
              <Typography color="gray">
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>

            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>

              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
          <Box
            mt={2}
            p={2}
            sx={{
              backgroundColor: "#3F3F3F",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{
                display: "-webkit-box",
                overflow: "clip",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: showMore ? null : 2,
              }}
            >
              {description}
            </Typography>
          </Box>
          <Stack alignItems="end" pt={1}>
            <Typography
              variant="body1"
              color="gray"
              onClick={() => setShowMore(!showMore)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {showMore ? <span>Show less</span> : <span>Read more</span>}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            px={2}
            sx={{ color: "white" }}
          >
            <Comments comments={comments} />
          </Stack>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
