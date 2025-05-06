
const API_KEY="8df5aee02940e0a72a9c36ff18f0a5c2";
const base_API="https://api.themoviedb.org/3/";

const requests={ 
   trending:`${base_API}trending/all/day?api_key=${API_KEY}`,
   netflix_original:`${base_API}discover/tv?api_key=${API_KEY}&with_networks=213`,
   toprated:`${base_API}movie/top_rated?api_key=${API_KEY}`,
   adventure: `${base_API}discover/movie?api_key=${API_KEY}&with_geners=12`,
   comedy: `${base_API}discover/movie?api_key=${API_KEY}&with_genres=35`,
   war: `${base_API}discover/movie?api_key=${API_KEY}&with_genres=10752`, 
   action:`${base_API}discover/movie?api_key=${API_KEY}&with_genres=28`,
   horror:`${base_API}discover/movie?api_key=${API_KEY}&with_genres=27`,
   documentary:`${base_API}discover/movie?api_key=${API_KEY}&with_genres=99`,
   western:`${base_API}discover/movie?api_key=${API_KEY}&with_genres=37`,
   family:`${base_API}discover/movie?api_key=${API_KEY}&with_genres=10751`,
   popular_tvshows:`${base_API}tv/popular?api_key=${API_KEY}&language=en-US`,
   popularity:`${base_API}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=213`,
   trending_tvshows:`${base_API}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=trending_now.desc&with_networks=213`,
   crime_tvshows:`${base_API}tv/213/similar?api_key=${API_KEY}&language=en-US&page=1`,
   recomendation_tvshows:`${base_API}tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
   hindi_movies:`${base_API}discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&with_original_language=hi`,
   kannada_movies:`${base_API}discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&with_original_language=kn`,
   telugu_movies:`${base_API}discover/movie?api_key=${API_KEY}&region=IN&language=te-IN&with_original_language=te`,
   tamil_movies:`${base_API}discover/movie?api_key=${API_KEY}&region=IN&language=ta-IN&with_original_language=ta`,
   malayalam_movies:`${base_API}discover/movie?api_key=${API_KEY}&region=IN&language=ta-IN&with_original_language=ml`,
   romance_movies: `${base_API}discover/movie?api_key=${API_KEY}&with_genres=10749`, 
   science_fiction_movies: `${base_API}discover/movie?api_key=${API_KEY}&with_genres=878`,
   serachEndpoint : (serachText)=>  `${base_API}search/movie?api_key=${API_KEY}&query=${serachText}&include_adult=false`
}

export default requests;



