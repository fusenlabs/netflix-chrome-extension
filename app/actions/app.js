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

export function changeActor(actorName) {
  return {
    type: 'CHANGE_ACTOR',
    value: actorName
  };
}

export function changeAppState(nextStep) {
  return {
    type: 'CHANGE_APP_STATE',
    value: nextStep
  }
}
