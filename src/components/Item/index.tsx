import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface ItemListProps {
  artist: { id: string; title: string };
  isSelected: boolean;
  toggleSelection: () => void;
}

const ItemList: React.FC<ItemListProps> = ({
  artist,
  isSelected,
  toggleSelection,
}) => (
  <FormControlLabel
    control={<Checkbox checked={isSelected} onChange={toggleSelection} />}
    label={artist.title}
  />
);

export default React.memo(ItemList);
