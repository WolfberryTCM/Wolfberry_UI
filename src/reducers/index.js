import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import search from './search';
import book from './book';
import appointment from './appointment';
import appointments from './appointments'
export default combineReducers({ alert, auth, profile, search, book,appointment,appointments });
