import React from "react";
import Typography from "@mui/material/Typography";

interface SelectedLabelProps {
  selectedCount: number;
}

const SelectedLabel: React.FC<SelectedLabelProps> = ({ selectedCount }) => (
  <Typography variant="body2" sx={{ textAlign: "left", padding: "6px 16px" }}>
    {selectedCount} selected
  </Typography>
);

export default React.memo(SelectedLabel);
