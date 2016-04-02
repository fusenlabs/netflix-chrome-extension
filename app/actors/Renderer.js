import * as appActions from './../actions/app';

/**
 * Use this actor to manipulate the DOM. 
 * Abstract Dom related methods with generalization and descriptive function names
 */
export default (state, dispatch) => {
    console.log('I\'m renderer');
    console.log('current is: ' + state.currentActor);
    dispatch(appActions.changeActor('renderer'));
};
