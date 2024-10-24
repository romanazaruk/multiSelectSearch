import React, { useState, useMemo, useCallback } from "react";
import Box from "@mui/material/Box";
import { useArtistsSearch } from "../hooks/useArtistsSearch";
import SearchInput from "../components/SearchInput";
import ButtonGroup from "../components/ButtonGroupItems";
import SelectedLabel from "../components/SelectedLabel";
import ArtistList from "../components/List";

interface Artist {
  id: string;
  title: string;
}

const MultiSelectSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtists, setSelectedArtists] = useState<Artist[]>([]);
  const [showSelected, setShowSelected] = useState(false);

  // Fetching artists based on the search query (with a delay of 500ms)
  const { artists, isLoading, error } = useArtistsSearch(searchQuery, 500);

  // Function to handle artist selection or removal
  const toggleArtistSelection = useCallback((artist: Artist) => {
    setSelectedArtists((prevSelected) =>
      prevSelected.find((item) => item.id === artist.id)
        ? prevSelected.filter((item) => item.id !== artist.id)
        : [...prevSelected, artist]
    );
  }, []);

  // Function to clear all selected artists
  const clearSelection = useCallback(() => {
    setSelectedArtists([]);
    setShowSelected(false);
  }, []);

  // Function to show only selected artists
  const handleShowSelected = useCallback(() => {
    setSearchQuery("");

    if (selectedArtists.length > 0) {
      setShowSelected(true);
    }
  }, [selectedArtists]);

  // Memoize displayed artists, showing either all artists or only selected ones
  const displayedArtists = useMemo(
    () => (showSelected ? selectedArtists : artists),
    [showSelected, selectedArtists, artists]
  );

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={(query) => {
          setShowSelected(false);
          setSearchQuery(query);
        }}
      />
      {selectedArtists.length > 0 ? (
        <ButtonGroup
          showSelected={showSelected}
          selectedArtistsCount={selectedArtists.length}
          handleShowSelected={handleShowSelected}
          clearSelection={clearSelection}
        />
      ) : (
        <SelectedLabel selectedCount={selectedArtists.length} />
      )}
      <ArtistList
        artists={displayedArtists}
        selectedArtists={selectedArtists}
        isLoading={isLoading}
        error={error}
        toggleArtistSelection={toggleArtistSelection}
      />
    </Box>
  );
};

export default MultiSelectSearch;