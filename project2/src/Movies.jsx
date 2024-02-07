import { getMoviesV2 } from "./api";
import Moviecard from "./Moviecard"

const moviess = getMoviesV2()
const movies = moviess.results;
const onmovieclick =()=>{
    console.log("moviesclick",movies)
}
    
    const Getallmovies=()=>{
        const array=[];
        for(let i =0;i<movies.length;i++){
            array.push(<Moviecard onclick={onmovieclick} data={movies[i]}/>)
        }
        return array;
    }
const Movies = () =>{ 
    return(
        <div className="flex  items-center w-100 flex-wrap justify-center overflow-hidden bg-gray-900 "  >
         {Getallmovies()}
        </div>
    )
    
}
export default Movies;