import React from 'react';
import "./Searchbar.css";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Searchbar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
    </div>
  );
}

export default Searchbar;
