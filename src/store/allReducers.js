import {combineReducers} from 'redux';
import Home from '../screen/home/redux/reducer';
import eksplor from '../screen/eksplor/redux/reducer';
import Profile from '../screen/profile/redux/reducer';
import Play from '../screen/play/redux/reducer';

export const allReducers = combineReducers({
  Home,
  eksplor,
  Profile,
  Play,
});
