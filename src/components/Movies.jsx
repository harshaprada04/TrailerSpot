import MovieShowLister from "./MovieShowLister";
import requests from "../utils/request";

function Movies() {
  return (
    <div className="pt-15 h-screen w-full pl-5">
      <MovieShowLister
        title="Hindi Movies"
        fetechURL={requests.hindi_movies}
        isOriginal
      />
      <MovieShowLister
        title="Kannada Movies"
        fetechURL={requests.kannada_movies}
        isOriginal
      />
      <MovieShowLister
        title="Telugu Movies"
        fetechURL={requests.telugu_movies}
        isOriginal
      />
      <MovieShowLister
        title="Tamil Movies"
        fetechURL={requests.tamil_movies}
        isOriginal
      />
      <MovieShowLister
        title="Romantic Movies"
        fetechURL={requests.romance_movies}
        isOriginal
      />
      <MovieShowLister
        title="Malayalam Movies"
        fetechURL={requests.malayalam_movies}
        isOriginal
      />
      <MovieShowLister
        title="Science Fiction Movies"
        fetechURL={requests.science_fiction_movies}
        isOriginal
      />
      <MovieShowLister
        title="Documentary Movies"
        fetechURL={requests.documentary}
        isOriginal
      />
      <MovieShowLister
        title="Western Movies"
        fetechURL={requests.western}
        isOriginal
      />
      <MovieShowLister
        title="Family Movies"
        fetechURL={requests.family}
        isOriginal
      />
       <div className="h-20"/>
    </div>
  );
}
export default Movies;
