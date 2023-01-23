export function FilterFilmsByDirector(films, director) {
//recieve array of objects (title and director) and director
//return filtered array of objects with chosen director

if(director) {
return films.filter((film) => film.director == director)
} else {
    return films;
}

}

export function GetListOf(films,prop) {
//receive array of films and prop
//return array of prop values from films

 return [...new Set(films.map((film) => film[prop] || ""))];



}
