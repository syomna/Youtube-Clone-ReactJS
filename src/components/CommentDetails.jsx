import {
  ArrowDropDown,
  ThumbDownOffAlt,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { demoProfilePicture } from "../utils/constants";

const CommentDetails = ({ comment, totalReplyCount }) => {
  console.log(comment);
  const timeago = moment(comment.publishedAt).fromNow();
  const [showMore, setShowMore] = useState(false);
  const moreThan = comment.textOriginal.split(/\n/).length >= 2;
  console.log(`photo ${comment.authorProfileImageUrl}`);

  return (
    <Box my={2}>
      <Stack direction="row">
        <Box width="50px" height="50px" mr="15px">
          <img
            src={
              comment.authorProfileImageUrl
                ? comment.authorProfileImageUrl
                : demoProfilePicture
            }
            alt="profile"
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>

        <Stack direction="column">
          <Stack direction="row" gap={1}>
            <Typography variant="body1" fontWeight="bold">
              {comment.authorDisplayName}
            </Typography>
            <Typography variant="body2" color="gray">
              {timeago}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{
              display: "-webkit-box",
              overflow: "clip",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: showMore ? null : 3,
            }}
          >
            {comment.textOriginal}
          </Typography>
          <Typography
            onClick={() => setShowMore(!showMore)}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            color="gray"
          >
            {moreThan && (
              <span>
                {showMore ? <span>Show less</span> : <span>Read more</span>}
              </span>
            )}
          </Typography>

          <Stack direction="row" my="4px" alignItems="center">
            <ThumbUpOffAlt
              fontSize="12px"
              sx={{
                marginRight: "4px",
                cursor: "pointer",
              }}
            />
            {comment.likeCount > 0 && (
              <Typography variant="subtitle2">{comment.likeCount}</Typography>
            )}
            <ThumbDownOffAlt
              fontSize="12px"
              sx={{
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          </Stack>
          {totalReplyCount > 0 && (
            <Stack direction="row" color="#3DA6FF" sx={{ cursor: "pointer" }}>
              <ArrowDropDown
                sx={{
                  marginRight: "4px",
                }}
              />
              <Typography variant="subtitle2">
                {totalReplyCount} reply
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default CommentDetails;
