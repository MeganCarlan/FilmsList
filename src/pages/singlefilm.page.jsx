import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SingleFilmPage(props) {

    let [item, setItem] = useState({});

    let {id} = useParams();

    function getFilm() {

        fetch(`https://ghibliapi.herokuapp.com/films/${id}`, {mode: "no-cors"})
        .then((result) => result.json())
        .then((data) => setItem(data))
        .catch((err) => console.error(err));

    }

    useEffect(() => {
        getFilm()}, []);

    return (
        <div>
         <div>
            <img src={`${item.image}`} alt={`${item.title} Poster`} />
        </div>
        <div>
            <h1>{item.title}</h1>
             <p>
                Directed by {item.director}. Produced by {item.producer}.
             </p>
             <p>
                The film was released in <strong>{item.release_date}</strong> and garnered
                a <strong>{item.rt_score}</strong> aggregate score on{" "}
                <a
                    href="https://www.rottentomatoes.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Rotten Tomatoes
                </a>
      .
            </p>
            <h2>Description</h2>
            <p>{item.description}</p>
         </div>
        </div>
    )

}