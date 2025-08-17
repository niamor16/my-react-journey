import { useState } from "react";

export default function Search({ onSearch, isLoading }: { onSearch: CallableFunction, isLoading: boolean }) {
  function handleResearch() {
    if (search) {
      onSearch(search);
      setSearch("");
    }
  }

  const [search, setSearch] = useState<string>("");
  return (
    <label>
      Rechercher une ville
      <input
        type="text"
        placeholder="ville"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <button type="button" onClick={handleResearch}>
        {isLoading ? '...' : 'Rechercher'}
      </button>
    </label>
  );
}
