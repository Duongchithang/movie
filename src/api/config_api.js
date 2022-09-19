const configAPI = {
    baseUrl : 'https://api.themoviedb.org/3',
    apikey : '22397d3afd661c2ae10c46748ff3645a',
    originalImage : (imgpath)=> `https://image.tmdb.org/t/p/original/${imgpath}`,
    w500Image : (imgpath)=> `https://image.tmdb.org/t/p/w500/${imgpath}`
}

export default configAPI;