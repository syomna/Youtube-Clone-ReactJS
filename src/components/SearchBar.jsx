import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainRoute } from "../utils/constants";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        boxShadow: "none",
        pl: 2,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm) {
          navigate(`${mainRoute}search/${searchTerm}`);
          setSearchTerm("");
        }
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
