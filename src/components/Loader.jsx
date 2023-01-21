import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack minHeight="95vh" justifyContent="center" alignItems="center">
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
