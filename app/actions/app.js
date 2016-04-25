const setLoadingStatus = (status = false, text = 'loading')=> {
  return {
    type: 'LOADING',
    value: status,
    message: text.toUpperCase()
  };
};

export function startSearching(label) {
  return setLoadingStatus(true, label);
}

export function stopSearching() {
  return setLoadingStatus(false, '');
}

export function detectedScreen(screenName) {
  // async to let actors release the acting flag.
  return (dispatch, getState) => {
    console.log('screen detected');
    dispatch({
      type: 'SCREEN_DETECTION',
      value: screenName
    });
  };
}

export function changeAppState(nextStep) {
  // async to let actors release the acting flag.
  return (dispatch, getState) => {
    dispatch({
      type: 'CHANGE_APP_STATE',
      value: nextStep
    });
  };
}

export function queueMovie(movieKey) {
  return (dispatch, getState) => {
    console.log(movieKey);
    dispatch({
      type: 'ADD_MOVIE_TO_FETCH',
      value: movieKey
    });
  }
}

export function clearQueueMovies() {
  dispatch({
    type: 'CLEAR_MOVIES_TO_FETCH'
  });
}

export function fetchMovie(movieTitle) {
  return (dispatch, getState) => {
    startSearching('fetching movie data');
  }
}
