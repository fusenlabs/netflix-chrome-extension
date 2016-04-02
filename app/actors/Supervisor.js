import * as appActions from './../actions/app';

/**
 * Use this actor to check the integrity of the DOM. 
 * It ensures that the code can find the movies title in the page 
 * and the placeholder for element injections.
 */
export default (state, dispatch) => {
    console.log('I\'m supervisor');
    console.log('current is: ' + state.currentActor);
    dispatch(appActions.changeActor('supervisor'));
};
