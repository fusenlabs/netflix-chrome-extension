import * as appActions from './../actions/app';

/**
 * Use this actor to check the integrity of the DOM. 
 * It ensures that the code can find the movies title in the page 
 * and the placeholder for element injections.
 */
const preConditions = (state) =>{
    return state.detectedScreen === '';
};

export default (state, dispatch) => {
    let screenName = 'unknown';
    if (preConditions(state)) {
        // detect if is profile-selection or movie-list screen
        // otherway is set as unknown.
        dispatch(appActions.setDetectedScreen(screenName));
    }
};
