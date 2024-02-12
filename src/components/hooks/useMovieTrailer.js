import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId)=>{


    const dispatch = useDispatch()
    //fetching the traler video and updating the store with trailer Video data
    const getMovieVideos = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
      
        const filteredVideo = json.results.filter(video => video.type==="Trailer");
        const       trailer = filteredVideo.length ? filteredVideo[0]:json.results[0];
      //  console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        getMovieVideos()
    },[])

}

export default useMovieTrailer;