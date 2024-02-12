
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'



const Browse = () => {
 useNowPlayingMovies();
  return (
    <div>
      <Header/>
      {
        /**
         * movieContainer
         *  -Video Background 
         *  -video Title
         * Secocndary container 
         *  -movielst * n
         *    -cards * n
         * 
         */
      }
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse