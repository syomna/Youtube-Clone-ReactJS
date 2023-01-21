import { Box, Typography } from "@mui/material";
import React from "react";
import CommentDetails from "./CommentDetails";

const Comments = ({ comments }) => {
  return (
    <Box>
      <Typography variant="h6" mt={2}>
        {comments.length} Comments
      </Typography>
      {comments.map((comment, index) => (
        <Box key={index}>
          <CommentDetails
            comment={comment.snippet.topLevelComment.snippet}
            totalReplyCount={comment.snippet.totalReplyCount}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Comments;
