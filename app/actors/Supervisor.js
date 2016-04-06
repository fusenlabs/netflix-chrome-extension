import * as appActions from './../actions/app';

/**
 * Use this actor to check the integrity of the DOM.
 * It ensures that the code can find the movies title in the page
 * and the placeholder for element injections.
 */
const preConditions = (state) =>{
  return state.currentState === 'detecting_screen';
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

const setMovieOverListener() =>{
  
}

export default (state, dispatch) => {
  if (preConditions(state)) {
    // detect if is profile-selection or movie-list screen
    const isProfileScreen = document.querySelectorAll('.profile-link').length > 0;
    const isMovieListScreen = document.querySelectorAll('.title_card').length > 0;
    if (isProfileScreen) {
      // set profile pick listener
      setProfilePickListener();
    }

    if (isMovieListScreen) {
      // set movie rollover listener
      setMovieOverListener();
    }

    // otherway is set as unknown.
    // dispatch(appActions.setDetectedScreen(screenName));
  }
};
