import {combineReducers} from 'redux';
import comments from './comments/reducerComments';
import auth from './auth/reducerAuth';

export default combineReducers({ comments, auth });
