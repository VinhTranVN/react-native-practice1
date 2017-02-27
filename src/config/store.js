import {
	createStore
} from 'redux';
import rootReducer from 'config/rootReducer';

const store = createStore(rootReducer);
export default store;
