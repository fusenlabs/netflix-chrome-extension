import * as appActions from './../actions/app';

/**
 * Use this actor to obtain remote data.
 * It connects with endpoints and retrieve data from them.
 */
const preConditions = (state) =>{
  return state.app.moviesToFetch.length > 0;
};

export default (state, dispatch) => {
    if (preConditions(state)) {
      console.log('run fetcher');
    }
};

export function fetch() {
  /*fetch(
    'https://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=en8yner472hjctq4ra3m8uzj&q=batman'
  ).then(response => {console.log(response)})*/
}
