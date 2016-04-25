import * as appActions from './../actions/app';
import * as utils from './../utils';
import App from './../App';

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

const awaitForInfo = (getCurrentTitle, getCurrentYear) =>{
  return new Promise((resolve, reject) => {
    const timeoutAction = () =>{
      if (getCurrentTitle()) {
        console.log(getCurrentTitle().innerText);
        resolve({
          movieTitle: getCurrentTitle().innerHTML,
          movieYear: getCurrentYear().innerHTML
        });
      } else {
        console.log('awaiting');
        setTimeout(timeoutAction, 500);
      }
    };

    timeoutAction();
  });
}

const isNew = (getState, movieKey) =>{
  console.log(getState().app.moviesToFetch);
  return getState().app.moviesData[movieKey] === undefined
    && Array.from(getState().app.moviesToFetch).indexOf(movieKey) === -1;
}

const setMovieOverListener = (getState, getMovieItems, getTitle, getYear, dispatch) =>{
  const movieTileItems = getMovieItems();
  for (let i = 0; i < movieTileItems.length; i++) {
    movieTileItems[i].addEventListener('mouseover', (e) =>{
      // delay this until html tags with movie title and year were created.
      awaitForInfo(getTitle, getYear).then(({movieTitle, movieYear})=> {
        let movieKey = utils.movieToKey(movieTitle, movieYear);
        console.log(isNew(getState, movieKey));
        if (isNew(getState, movieKey)) {
          dispatch(appActions.queueMovie(movieKey));
        }
      });
    });
  }
};

export default (state, dispatch) => {
  if (preConditions(state)) {
    console.log('run supervisor');
    // helpers
    const getMovieItems = () => document.querySelectorAll('.title_card');
    const getProfileItems = () => document.querySelectorAll('.profile-link');
    const getTitle = () => document.querySelectorAll('.bob-info .bob-title')[0];
    const getYear = () => document.querySelectorAll('.bob-info .year')[0];
    const getState = () => state;

    // detect if is profile-selection or movie-list screen
    const hasProfileElements = getProfileItems().length > 0;
    const isMovieListScreen = getMovieItems().length > 0;
    const isProfileScreen = hasProfileElements && !isMovieListScreen;

    if (isProfileScreen) {
      // set profile pick listener
      setProfilePickListener();
    }

    if (isMovieListScreen) {
      // set movie rollover listener
      setMovieOverListener(getState, getMovieItems, getTitle, getYear, dispatch );
    }

    if (!isProfileScreen && !isMovieListScreen) {
      // Report unknown DOM structure
    }
  }
};
