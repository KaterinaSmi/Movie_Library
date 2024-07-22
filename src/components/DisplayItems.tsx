import React, { useEffect, useState } from 'react';
import { MovieShowsWrapper } from '../styles/Styles.modules';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    first_air_date: string;
    name?: string;
}

interface DataProps {
    apiEndPoint: string;
    numberOfMovies: number;
    showButtons: boolean;
    tvShowOn: boolean;
    moviesOn: boolean;
    itemHeading: string;
}

const DisplayItems: React.FC<DataProps> = ({
    apiEndPoint,
    numberOfMovies,
    showButtons,
    tvShowOn,
    moviesOn,
    itemHeading,
}) => {
    const [showItems, setShowItems] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await axios.get(apiEndPoint, { params: { page: currentPage } });
                const { results, total_pages } = response.data;
                setShowItems(results.slice(0, numberOfMovies));
                setTotalPages(total_pages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setTimeout(()=>{
                    setLoading(false);

                },1000);
            }
        };

        fetchMovies();
    }, [currentPage, apiEndPoint, numberOfMovies]);

    const nextItemsPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((nextPage) => nextPage + 1);
        }
    };

    const prevItemsPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <MovieShowsWrapper>
            {loading ? (
                <div className="loadingOverlay">
                    <CircularProgress size={80} color="warning" />
                    <p>Loading</p>
                </div>
            ) : (
                <>
                    <div className="movieHeading">
                        <h1>{itemHeading}</h1>
                    </div>
                    <div className="movieCard">
                        {showItems.map((item) => (
                            <div className="movie" key={item.id}>
                                <div className="movieImage">
                                    <img src={`http://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="movieImage" />
                                    <span>{((item.vote_average / 10) * 100).toFixed(0)}%</span>
                                </div>
                                <div className="movieInfo">
                                    {moviesOn && (
                                        <>
                                            <h4>{item.title}</h4>
                                            <p>{new Date(item.release_date).toLocaleDateString()}</p>
                                        </>
                                    )}
                                    {tvShowOn && (
                                        <>
                                            <h4>{item.name}</h4>
                                            <p>{new Date(item.first_air_date).toLocaleDateString()}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                        {showButtons && (
                            <div className="buttons">
                                {currentPage > 1 && (
                                    <button className="btnPrev" onClick={prevItemsPage}>
                                        Back
                                    </button>
                                )}
                                <p>
                                    Page <b>{currentPage}</b>
                                </p>
                                {currentPage < totalPages && (
                                    <button className="btnNext" onClick={nextItemsPage}>
                                        Next
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </>
            )}
        </MovieShowsWrapper>
    );
};

export default DisplayItems;
