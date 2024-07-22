import React, { useState } from 'react';
import { Cover, SearchBar } from '../styles/Styles.modules';

interface CoverPageProps {
  title: string;
  description: string;
  catchyPhrase: string;
  headerImage: string;
  showSearch: boolean;
  showHeaderImage: boolean;
  setSearchQuery: (query: string) => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ title, description, catchyPhrase, headerImage, showSearch, showHeaderImage, setSearchQuery }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchInput);
  };
   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Cover>
      {showHeaderImage && <img src={headerImage} alt="Cover" />}
      <div className="coverText">
        <h1>{title}</h1>
        <p>{description}</p>
        <em>{catchyPhrase}</em>
      </div>
      {showSearch && (
        <SearchBar>
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>Search</button>
        </SearchBar>
      )}
    </Cover>
  );
};

export default CoverPage;
