import { lazy, Suspense } from "react";

import "./App.css";

// Using React's lazy function to dynamically import the MultiSelectSearch component.
// This means the component is only loaded when it is needed, improving initial load times.
const MultiSelectSearch = lazy(() => import("./pages/MultiSelectSearch"));

function App() {
  return (
    // Wrapping the dynamically imported MultiSelectSearch component with Suspense.
    // Suspense allows us to show a fallback (e.g., "Loading...") while the component is being loaded.
    <Suspense fallback={<>Loading...</>}>
      <MultiSelectSearch />
    </Suspense>
  );
}

export default App;