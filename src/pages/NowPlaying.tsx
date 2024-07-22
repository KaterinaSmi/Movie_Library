import React from 'react'
import CoverPage from '../components/CoverPage';
import { apiKey, now_playing, now_playingShows } from '../modules/APILinks'
import coverPicture from './cover.jpg';
import DisplayItems from '../components/DisplayItems';
import { useHeaderImageAndSearch } from '../Hooks/useHeaderImageAndHandleSearch';
import { SearchResultsWrapper } from '../styles/Styles.modules';
import { MovieShowsWrapper } from '../styles/Styles.modules';

const NowPlaying = () => {
  const { headerImage, searchResults, setSearchQuery } = useHeaderImageAndSearch();
  return (
    <div>
      <CoverPage title={"Hot Trends"} description={""} catchyPhrase={"Explore the latest films currently captivating audiences in theaters!"} headerImage={headerImage||coverPicture} showSearch={true} showHeaderImage={true} setSearchQuery={setSearchQuery}/>

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
       </MovieShowsWrapper> ) : (
        <>
        <DisplayItems 
        apiEndPoint = {`${now_playing}?api_key=${apiKey}`}
        itemHeading={'Now Playing Movies'} showButtons = {true}  tvShowOn ={false} moviesOn ={true} numberOfMovies={10}
        />
        </>
      )}
    </div>
  )
}

export default NowPlaying