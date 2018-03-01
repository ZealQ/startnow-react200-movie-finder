import axios from "axios";

export function theFilms(movie) {
    return {
        type: "THE_FILMS",
        payload:
            axios
         .get(`/lookup/${movie}`)
        .then(res => res.data)
    }
}