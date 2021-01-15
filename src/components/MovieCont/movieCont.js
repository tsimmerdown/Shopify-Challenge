import React, { useEffect, useState } from "react";
import "./movieCont.css"
import Search from "../Search/search"
import MovieList from "../MovieList/movieList"
import axios from "axios";


const MovieCont = (props) => {

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const getInfo = () => {
    if(search !== ""){
      axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=9775fcc&s=${search}`)
      .then(({ data }) => {
        setResults(data.Search);
      })
      .catch((error) => {
        console.log(`Error ${error} while fetching`);
      })
    }
  }

  useEffect( () => {
    getInfo();
  }, [search]);

  return <div className="movieCont">
    <Search setSearch={setSearch} getInfo={getInfo} />
    <MovieList results={results} {...props} />
  </div>
}

export default MovieCont;