import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
     {props.movies.map(movie => (
        
        <Link className="movie-list" to={`/movie-list/${movie.id}`} key={movie.id}>
          
        </Link>
      ))}
    </div>
  );
};




export default MovieList;
