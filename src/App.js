import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetails,
  SearchFeed,
  ChannelDetails,
} from "./components";

export const App = () => {
  console.log(`api key ${process.env.RAPID_API_KEY}`);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path="/Youtube-Clone-ReactJS/" exact element={<Feed />} />
          <Route
            path="/Youtube-Clone-ReactJS/video/:id"
            element={<VideoDetails />}
          />
          <Route
            path="/Youtube-Clone-ReactJS/channel/:id"
            element={<ChannelDetails />}
          />
          <Route
            path="/Youtube-Clone-ReactJS/search/:searchTerm"
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
