import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import {toastReducer} from '../redux/toast';

const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		toast: toastReducer,
	});

export default rootReducer;
