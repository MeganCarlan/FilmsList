
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

export function GetFilmStats(films) {

    let total = films.length;
    let acc_score = 0;

    for (let film of films) {
        acc_score = acc_score + film.rt_score;
    }

    let avg_score = acc_score/total;

    let latest = 0;

    for (let film of films) {
        if (film.release_date > latest) {
            latest = film.release_date;
        }
    }

    return {
        "acc_score": acc_score,
        "avg_score": avg_score,
        "total": total,
        "latest": latest,
    }


}
