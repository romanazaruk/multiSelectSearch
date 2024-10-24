import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ItemList from "../Item";

interface ArtistListProps {
  artists: { id: string; title: string }[];
  selectedArtists: { id: string; title: string }[];
  isLoading: boolean;
  error: string | null;
  toggleArtistSelection: (artist: { id: string; title: string }) => void;
}

const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ArtistList: React.FC<ArtistListProps> = ({
  artists,
  selectedArtists,
  isLoading,
  error,
  toggleArtistSelection,
}) => {
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <AnimatePresence>
      {artists.map((artist) => (
        <motion.div
          key={artist.id}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={ANIMATION_VARIANTS}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: "8px" }}
        >
          <ItemList
            artist={artist}
            isSelected={selectedArtists.some((item) => item.id === artist.id)}
            toggleSelection={() => toggleArtistSelection(artist)}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default React.memo(ArtistList);
