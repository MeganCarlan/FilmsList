import { useState, useEffect } from "react";
import { FilterFilmsByDirector, GetListOf, GetFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom";



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
   let {avg_score, total, latest} = GetFilmStats(films);

   
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
        <div>
        <div>
            <span># Of Films</span>
            <span>{total}</span>
        </div>
            <div>
                <span>Average Rating</span>
                <span>{avg_score.toFixed(2)}</span>
            </div>
            <div>
                <span>Latest Film</span>
                <span>{latest}</span>
            </div>
        </div>

        <ul >
            {filmsByDirector.map((film) => {
               return (
               <li key={film.id}>
                    <Link to={`${film.id}`}>{film.title}</Link>
                </li>
            );
               })}
        </ul>
      </div>
    );
  }
  
  
  