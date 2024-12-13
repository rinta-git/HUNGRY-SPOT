import { useState } from "react";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-wrap">
        <input
          type="text"
          placeholder="Search for food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <i class="fas fa-search icon"></i>
      </div>
    </>
  );
};
