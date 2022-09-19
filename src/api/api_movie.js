import axiosClient from "./axiosClient";
const movieList = {
    getMoviePopular : (params) =>{
        const url = `/movie/popular`;
       return  axiosClient.get(url,{params});
    }
}
export {
    movieList
}