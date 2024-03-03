import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


 const home = () => {
    
  const[name,Setname]=useState('')
  const[movies,Setmovies]=useState([])

  const apiKey =  import.meta.env.VITE_API_KEY;
  

    const getname=(e)=>{
        e.preventDefault()

        

        let url = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${apiKey}&search_value=${name}&search_type=1`;

        fetch(url, { method: 'Get' })
            .then((res) => res.json())
            .then((json) => {
                console.log(json['results'])
                Setmovies(json['results'])
                Setname('')
            
            
            
            });


        }


        const handlechange=(e)=>{
            const updatedInput = e.target.value.replace(/ /g, '%20');
     
            Setname(updatedInput)
        }
  
       
  
    return (
        <div className='main'>
        <form  className='form-container' onSubmit={getname}>
  
          <h1 className='form-title'>Search any movies & Actor </h1>
          <input type="text" id="search" name="search" placeholder="Search for a movie" onChange={handlechange} value={name}/>
  
          <button type="submit" className='submit-btn'>Search</button>
  
       </form>

       <div className="container">
        
        {movies.map((movie, index) => (
                
            <div key={index} className='movie_container'>
      
            
            <Link to={ movie.type?.toLowerCase() === 'actor' || movie.type?.toLowerCase() === 'actress' ? null : `/info/${movie.imdb_id}`}>
                <img src={movie.image_url} alt={movie.name} className="link_img" />
            </Link>
                     <h3> Name:{movie.name}</h3>
                     <p> Year:{movie.year}</p>
                     <p>  Tmdb Id:{movie.tmdb_id}</p>
                     <p> Type:{movie.type}</p>
            </div>
                
          
                  ))
            
            
        }
      
          </div>


       </div>


  
    )}

export default home
