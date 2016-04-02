import App from './App';
import storeGenerator from './store/store';
import actors from './actors';

const store = storeGenerator();

// approach taken from 
// http://jamesknelson.com/join-the-dark-side-of-the-flux-responding-to-actions-with-actors/
let acting = false
store.subscribe(() =>{
  // Ensure that any action dispatched by actors do not result in a new
  // actor run, allowing actors to dispatch with impunity.
  if (!acting) {
    acting = true;
    actors.forEach((actor) =>{
      actor(store.getState(), store.dispatch);
    });
    acting = false;
  }
})

App.store = store;
App.boot();
