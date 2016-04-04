const initialState = {
    isTilesListView: false,
    isBusy: false,
    busyMessage: '',
    detectedScreen: '',
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
    CHANGE_ACTOR: () => Object.assign({},
      state,
      { currentActor: action.value }
    ),
    DEFAULT: ()=> state
  };
  return (switchObj.hasOwnProperty(action.type) && switchObj[action.type] || switchObj.DEFAULT)();
};
