import {combineReducers} from 'redux';
import userReducer from './userReducer';
import organizationReducer from './organizationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  organizations: organizationReducer,
});

export default rootReducer;
