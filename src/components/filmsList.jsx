import { useState, useEffect } from "react";


function FilmsList() {
   
   const [films, setFilms] = useState([]);

   async function getFilms()  {
    let res = await fetch("https://studioghibliapi-d6fc8.web.app/films");
    let data = await res.json();
    setFilms(data);
    }

    useEffect(()=> {
        getFilms();
        console.log("use effect");
        console.log(films);
    },[])

   
    return (
      <ul >
        {films.map((film) => (
            <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    );
  }
  
  export default FilmsList;
  