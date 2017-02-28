import { Platform } from 'react-native';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import thunk from 'redux-thunk';
import {
	composeWithDevTools
} from 'remote-redux-devtools';
import reducer from 'config/rootReducer';

let store;
 if (__DEV__) {
	const composeEnhancers = composeWithDevTools({
		 realtime: true,
		 name: Platform.OS,
		 hostname: 'localhost',
		 port: 8000
	 });

	 store = createStore(
		reducer,
		composeEnhancers(
		 applyMiddleware(thunk)
		)
	);
} else {
	store = createStore(
	 reducer,
	 composeWithDevTools(
		 applyMiddleware(thunk)
	 )
	);
}


export default store;
