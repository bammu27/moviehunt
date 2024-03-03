import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const info = () => {
    const [movie, setMovie] = useState({});

    const { id } = useParams();

    useEffect(() => {
       
        const apiKey = import.meta.env.VITE_API_KEY;

        console.log(apiKey);
        const url = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${apiKey}`;

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setMovie(json);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);

    return (
        <div className="info-container">
            <div className='info'>
                <div className='info-header'>
                    <h1 className='info-title'>{movie.title}</h1>

                      {movie.backdrop?(<img src={movie.backdrop} alt={movie.title} />):(<img src={movie.poster} alt={movie.title} />)}
                    <p>id :{movie.id}</p>
                    
                   
                </div>
                
                

                <div className='info-main'>
                        <div className='info-plot'>
                            <h3>Plot</h3>
                          <p>{movie.plot_overview}</p>   
                        </div>
                        {movie.genre_names && <p>Genres: {movie.genre_names.join(', ')}</p>}
                        {movie.user_rating&& <p>Rating:  {movie.user_rating}</p>}
                        
                        { movie.release_date &&<p>Release date: {movie.release_date}</p> }
                        
                        {movie.critic_score && <p>Critic Socre:  {movie.critic_score}</p>}
                        {movie.us_rating && <p>Age rating:  {movie.us_rating}</p>}
                        {movie.runtime_minutes && <p>Runtime:  {movie.runtime_minutes} min</p>} 
                    { movie.trailer && <p>Trailer: <Link href={ movie.trailer}><img src={movie.trailer_thumbnail}/> </Link></p>}
                    <button className='route-home'><Link to="/">Back</Link></button>
            </div>
            </div>
        </div>
    );
};

export default info;
