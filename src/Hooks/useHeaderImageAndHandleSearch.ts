// useHeaderImageAndSearch.ts

import { useState, useEffect } from 'react';
import { apiKey } from '../modules/APILinks';

export const useHeaderImageAndSearch = () => {
  const [headerImage, setHeaderImage] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
      .then(response => response.json())
      .then((data) => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        if (randomMovie && randomMovie.backdrop_path) {
          const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
          setHeaderImage(imageUrl);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [searchQuery]);

  return { headerImage, searchResults, setSearchQuery, setSearchResults };
};
