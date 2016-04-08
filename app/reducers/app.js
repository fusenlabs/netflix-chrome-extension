const initialState = {
    isTilesListView: false,
    isBusy: false,
    busyMessage: '',
    detectedScreen: '',
    states: ['booting','detecting_screen','awaiting_profile_selection','awaiting_rollover','fetching_information'],
    currentState: '',
    moviesToFetch: [],
    moviesData: new Map(),
    currentActor: ''
}

export default (state = initialState, action) => {
  const switchObj = {
    LOADING: () => Object.assign({},
      state,
      { isBusy: action.value, busyMessage: action.message }
    ),
    SCREEN_DETECTION: () => Object.assign({},
      state,
      { detectedScreen: action.value }
    ),
    CHANGE_APP_STATE: () => {
      if (state.states.indexOf(action.value) != -1) {
        return Object.assign({},
          state,
          { currentState: action.value }
        );
      } else {
        return state;
      }
    },
    ADD_MOVIE_TO_FETCH: () => {
      let moviesToFetch = new Set(state.moviesToFetch);
      moviesToFetch.set(action.value);
      return Object.assign({},
        state,
        { moviesToFetch }
      );
    },
    CHANGE_ACTOR: () => Object.assign({},
      state,
      { currentActor: action.value }
    ),
    DEFAULT: ()=> state
  };
  let newState = (switchObj.hasOwnProperty(action.type) && switchObj[action.type] || switchObj.DEFAULT)();
  /*console.log(newState);
  console.log("---------");*/
  return newState;
};
