import {createStore} from 'redux';
import {allReducers} from './allReducers';


export const Store = createStore(allReducers)