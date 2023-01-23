import { useState, useEffect } from "react";
import { FilterFilmsByDirector, GetListOf } from "../helpers/film.helpers";


export function FilmsPage() {
   
   const [films, setFilms] = useState([]);
   const [searchDirector, setSearchDirector]  = useState("");

   async function getFilms()  {
    let res = await fetch("https://studioghibliapi-d6fc8.web.app/films");
    let data = await res.json();
    setFilms(data);
    console.log(data);
    }

    useEffect(()=> {
        getFilms();
        console.log("use effect");
    },[])

   let filmsByDirector = FilterFilmsByDirector(films, searchDirector);
   let directors = GetListOf(films, "director");

   
    return (
      <div>
        <h1>Studio Ghibli Films</h1>
        <form>
            <div className="form-group">
                <label htmlFor="searchDirector">Filter By Director</label>
                <select 
                name="searchDirector" 
                id="searchDirector" 
                value={searchDirector} 
                onChange={(e) => setSearchDirector(e.target.value)} >
                    <option value="">All</option>
                    {directors.map((director) => <option value={director}>{director}</option>)}
                </select>
            </div>
        </form>
        <ul >
            {filmsByDirector.map((film) => (
                <li key={film.id}>{film.title}</li>
            ))}
        </ul>
      </div>
    );
  }
  
  
  