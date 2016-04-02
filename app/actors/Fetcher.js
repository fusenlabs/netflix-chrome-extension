import * as appActions from './../actions/app';

/**
 * Use this actor to obtain remote data.
 * It connects with endpoints and retrieve data from them.
 */
export default (state, dispatch) => {
    console.log('I\'m fetcher');
    console.log('current is: ' + state.currentActor);
    dispatch(appActions.changeActor('fetcher'));
};
