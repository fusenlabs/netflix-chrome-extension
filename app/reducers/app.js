const initialState = {
    isTilesListView: false,
    isBusy: false,
    busyMessage: ''
}

export default (state = initialState, action) => {
  const switchObj = {
    LOADING: () => Object.assign({},
      state,
      { isBusy: action.value, busyMessage: action.message }
    ),
    DEFAULT: ()=> state
  };
  return (switchObj.hasOwnProperty(action.type) && switchObj[action.type] || switchObj.DEFAULT)();
};
