import * as appActions from './../actions/app';
import * as utils from './../utils';

/**
 * Use this actor to obtain remote data.
 * It connects with endpoints and retrieve data from them.
 */
const preConditions = (state) =>{
  return state.app.moviesToFetch.length > 0;
};

export default (state, dispatch) => {
    if (preConditions(state)) {
      state.app.moviesToFetch.forEach((movieKey) => {
        const {title, year} = utils.keyToMovie(movieKey);
        fetch(`http://www.omdbapi.com/?t=${title}&y=${year}&plot=short&r=json`).then((response) => {
          console.log(response);
        });
      });

      appActions.clearQueueMovies();
    }
};

export function fetchMovie(url) {
  let parseJSON = (response) => {
    return response.status == 200 ? response.json() : response;
  };
  return fetch(url).then(parseJSON);
}
