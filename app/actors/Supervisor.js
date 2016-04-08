import * as appActions from './../actions/app';
import * as utils from './../utils';

/**
 * Use this actor to check the integrity of the DOM.
 * It ensures that the code can find the movies title in the page
 * and the placeholder for element injections.
 */
const preConditions = (state) =>{
  return state.app.currentState === 'detecting_screen';
};

const setProfilePickListener = () =>{
  const profileItems = document.querySelectorAll('.profile-link');
  for (let i = 0; i < profileItems.length; i++) {
    // @todo contemplate item selection by key press.
    profileItems[i].addEventListener('click', (e) =>{
      // relunch screen detection to attach rollover eventos to movie tiles.
      // @todo Should I delay this process to let UI updates and tiles drawing?
      appActions.changeAppState('detecting_screen');
    });
  }
};

const setMovieOverListener = (state) =>{
  const movieTileItems = document.querySelectorAll('.title_card');
  for (let i = 0; i < movieTileItems.length; i++) {
    movieTileItems[i].addEventListener('mouseover', (e) =>{
      // delay this until html tags with movie title and year were created
      let movieTitle = document.querySelectorAll('.bob-info .bob-title')[0].innerHTML;
      let movieYear = document.querySelectorAll('.bob-info .year')[0].innerHTML;
      let movieKey = utils.movieToKey(movieTitle, movieYear);
      console.log(movieKey);
      if (!state.app.moviesData.has(movieKey)) {
        appActions.queueMovie(movieKey);
      }
    });
  }
};

export default (state, dispatch) => {
  if (preConditions(state)) {
    console.log('run supervisor');
    // detect if is profile-selection or movie-list screen
    const hasProfileElements = document.querySelectorAll('.profile-link').length > 0;
    const isMovieListScreen = document.querySelectorAll('.title_card').length > 0;
    const isProfileScreen = hasProfileElements && !isMovieListScreen;
    if (isProfileScreen) {
      // set profile pick listener
      setProfilePickListener();
    }

    if (isMovieListScreen) {
      // set movie rollover listener
      setMovieOverListener(state);
    }

    // otherway is set as unknown.
    // dispatch(appActions.setDetectedScreen(screenName));
  }
};
