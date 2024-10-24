import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface ButtonGroupProps {
  showSelected: boolean;
  selectedArtistsCount: number;
  handleShowSelected: () => void;
  clearSelection: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  selectedArtistsCount,
  handleShowSelected,
  clearSelection,
}) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center">
    <Button
      variant="text"
      onClick={handleShowSelected}
      sx={{ textTransform: "none" }}
    >
      Show selected items {selectedArtistsCount}
    </Button>
    <Button variant="text" color="secondary" onClick={clearSelection}>
      Reset
    </Button>
  </Stack>
);

export default React.memo(ButtonGroup);
