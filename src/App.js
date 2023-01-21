import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetails,
  SearchFeed,
  ChannelDetails,
} from "./components";
import { mainRoute } from "./utils/constants";

export const App = () => {
  console.log(`api key ${process.env.RAPID_API_KEY}`);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path={`${mainRoute}`} exact element={<Feed />} />
          <Route path={`${mainRoute}video/:id`} element={<VideoDetails />} />
          <Route
            path={`${mainRoute}channel/:id`}
            element={<ChannelDetails />}
          />
          <Route
            path={`${mainRoute}search/:searchTerm`}
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
