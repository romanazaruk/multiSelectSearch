import React from "react";
import TextField from "@mui/material/TextField";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <TextField
      fullWidth
      autoFocus
      label="Search an artist name..."
      variant="outlined"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      autoComplete="off"
      sx={{ marginBottom: 2 }}
    />
  );
};

export default React.memo(SearchInput);
