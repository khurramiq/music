import { combineReducers } from 'redux';

import { musicReducer } from './musicReducer';

const CombinedReducers = combineReducers({
    music: musicReducer,
});

export default CombinedReducers;