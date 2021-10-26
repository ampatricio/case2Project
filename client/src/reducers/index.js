import { combineReducers } from 'redux';

import user from './users';
import part from './parts';

export default combineReducers({ user, part });