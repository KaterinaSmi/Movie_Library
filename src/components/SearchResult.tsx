import React from 'react'


interface SearchResultsProps {
    results: string[];
}

const SearchResult: React.FC<SearchResultsProps> = ({results}) => {
  return (
    <div className='searchResults'>
        <h2>Search Results:</h2>
        <ul>
            {results.map((result, index) =>(
                <li key={index}> {result}</li>            )
            )}
        </ul>
    </div>
  );
};

export default SearchResult