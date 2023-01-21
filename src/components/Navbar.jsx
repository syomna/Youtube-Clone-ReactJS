import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{ position: "sticky", top: "0", backgroundColor: "black" }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height="45px" />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
