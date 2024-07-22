
import React from 'react';
import CoverPage from '../components/CoverPage';
import DisplayItems from '../components/DisplayItems';
import { popularShows, apiKey, popular, top_ratedShows, upcoming } from '../modules/APILinks';
import { useHeaderImageAndSearch } from '../Hooks/useHeaderImageAndHandleSearch';
import coverPicture from './cover.jpg';
import { SearchResultsWrapper } from '../styles/Styles.modules';
import { MovieShowsWrapper } from '../styles/Styles.modules';
const Home = () => {
  const { headerImage, searchResults, setSearchQuery } = useHeaderImageAndSearch();

  return (
    <div>
      <CoverPage
        title="Welcome"
        description=""
        catchyPhrase="Your gateway to streaming the best movies and TV shows from the comfort of home!"
        headerImage={headerImage || coverPicture}
        showSearch={true}
        showHeaderImage={true}
        setSearchQuery={setSearchQuery}
      />
  
      {searchResults.length > 0 ? (
        <MovieShowsWrapper>
        <div className="searchResults">
          {searchResults.map((movie) => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </MovieShowsWrapper> ): (
        <>
          <DisplayItems
            apiEndPoint={`${popularShows}?api_key=${apiKey}`}
            itemHeading="Popular Shows"
            showButtons={true}
            tvShowOn={true}
            moviesOn={false}
            numberOfMovies={10}
          />
          <DisplayItems
            apiEndPoint={`${top_ratedShows}?api_key=${apiKey}`}
            itemHeading="Top Rated Shows"
            showButtons={true}
            tvShowOn={true}
            moviesOn={false}
            numberOfMovies={10}
          />
          <DisplayItems
            apiEndPoint={`${popular}?api_key=${apiKey}`}
            itemHeading="Popular Movies"
            showButtons={true}
            tvShowOn={false}
            moviesOn={true}
            numberOfMovies={10}
          />
          <DisplayItems
            apiEndPoint={`${upcoming}?api_key=${apiKey}`}
            itemHeading="Upcoming"
            showButtons={true}
            tvShowOn={false}
            moviesOn={true}
            numberOfMovies={10}
          />
        </>
      )}
    </div>
  );
};

export default Home;
