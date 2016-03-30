import App from './App';
import store from './store/store';
const appStore = store();

App.boot(appStore);
