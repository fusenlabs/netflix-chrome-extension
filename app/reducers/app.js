const initialState = {
    isTilesListView: false,
    isBusy: false,
    busyMessage: '',
    detectedScreen: '',
    currentActor: '',
    states: ['booting','detecting_screen','awaiting_profile_selection','awaiting_rollover','fetching_information'],
    currentState: ''
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
    CHANGE_ACTOR: () => Object.assign({},
      state,
      { currentActor: action.value }
    ),
    DEFAULT: ()=> state
  };
  return (switchObj.hasOwnProperty(action.type) && switchObj[action.type] || switchObj.DEFAULT)();
};
