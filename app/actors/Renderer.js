import * as appActions from './../actions/app';

/**
 * Use this actor to manipulate the DOM.
 * Abstract Dom related methods with generalization and descriptive function names
 */
const preConditions = (state) =>{
  return ['unknown', ''].indexOf(state.app.detectedScreen) != -1;
};

export default (state, dispatch) => {
  if (preConditions(state)) {
    console.log('render!');
  } else {
    console.log('screen not detected. Can\'t render');
  }
};
