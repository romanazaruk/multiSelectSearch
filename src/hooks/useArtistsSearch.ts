import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { debounce } from "../utils/debounce";

const API_URL = "https://api.artic.edu/api/v1/artists/search?q=";

interface Artist {
  id: string;
  title: string;
}

// Custom hook to search artists based on a search query with a delay
export const useArtistsSearch = (searchQuery: string, delay: number = 500) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize the debounced fetch function to avoid recreating it on every render
  const debouncedFetch = useMemo(() => {
    return debounce(async (query: string) => {
      // Don't fetch if the query is too short
      if (query.length <= 2) {
        setArtists([]);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(`${API_URL}${query}`);
        // Map the response to get the necessary artist details
        const fetchedArtists = data.data.map(({ id, title }: Artist) => ({
          id,
          title,
        }));
        setArtists(fetchedArtists);
      } catch (err) {
        setError("Failed to fetch artists");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }, delay);
  }, [delay]);

  // Effect to trigger the debounced fetch when the search query changes
  useEffect(() => {
    debouncedFetch(searchQuery);
  }, [searchQuery, debouncedFetch]);

  return { artists, isLoading, error };
};