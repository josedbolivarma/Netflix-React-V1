const API_KEY = "b0810e3887969be4bd3c12a2150742c7";

//endpoints
// cada enpoint es un género

// https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US

const base_url = "https://api.themoviedb.org/3/";

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${base_url}discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${base_url}movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${base_url}discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${base_url}discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${base_url}discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${base_url}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${base_url}discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

//trending/all/week?api_key=b0810e3887969be4bd3c12a2150742c7&language=en-US
//discover/tv?api_key=b0810e3887969be4bd3c12a2150742c7&with_networks=213
///movie/top_rated?api_key=b0810e3887969be4bd3c12a2150742c7&language=en-US
///discover/movie?api_key=b0810e3887969be4bd3c12a2150742c7&with_genres=28
///discover/movie?api_key=b0810e3887969be4bd3c12a2150742c7&with_genres=35
///discover/movie?api_key=b0810e3887969be4bd3c12a2150742c7&with_genres=27
///discover/movies?api_key=b0810e3887969be4bd3c12a2150742c7&with_genres=10749
///discover/movie?api_key=b0810e3887969be4bd3c12a2150742c7&with_genres=99