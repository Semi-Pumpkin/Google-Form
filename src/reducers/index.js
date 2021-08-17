import {combineReducers} from 'redux';
import user from './user';
import {HYDRATE} from 'next-redux-wrapper';
import userlist from './userlist';

export const USER_LOGOUT = "USER_LOGOUT"
export const userLogOut = () => ({
  type: USER_LOGOUT,
});

const appReducer = combineReducers({
  user: user,
  userlist: userlist
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      state = {
        ...state,
        server: {
            ...state.server,
            ...action.payload.server
        }
      }
    case USER_LOGOUT:{
      state = undefined;
    }
  }

  return appReducer(state, action);
};

export default rootReducer