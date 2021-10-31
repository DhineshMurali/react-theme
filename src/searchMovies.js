import React, {useState} from "react";
import "./styles/App.css";

export default function SearchMovies(){
   
  
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=6fe358ce90f38c62ad598a58cd42d8f6&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }
    
    return (
      <>    
           
            
            <form className="form" onSubmit={searchMovies}>
           
              <label className="label" htmlFor="query">Movie Name : </label>
                <input className="input" type="text" name="query"
                    placeholder="Enter the movie name e.g Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
                
            </form>
          
            <div className="card-list">
           
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h2 className="card--title">{movie.title}</h2>
                        <h3><strong>RELEASE DATE: {movie.release_date}</strong></h3>
                        <h3><strong>RATING: {movie.vote_average}</strong></h3>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
                
            </div> 
         
            
      </>
    )
};