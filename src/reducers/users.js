import { 
  GET_USER_NAME,
  GET_USER_EMAIL,
  GET_USER_HOUSE,
  GET_USER_PASS,
  ADD_USER,
  SUCCESS_USER,
  UNAUTORIZED_USER
 } from '../actions';

const initialState = {
    userInfo: {},
    usersDatabase: [],
    authorized: false,
    loggedUser: {}
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          name: action.payload
        }
      }
    case GET_USER_EMAIL:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          email: action.payload
        }
      }
    case GET_USER_HOUSE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          house: action.payload
        }
      }
    case GET_USER_PASS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          password: action.payload
        }
      }
    case ADD_USER:
      return {
        ...state,
        usersDatabase: (Object.keys(state.userInfo).length == 0)? state.usersDatabase : [...state.usersDatabase, state.userInfo],
        userInfo: {}
      }
    case SUCCESS_USER:
      return {
        ...state,
        authorized: action.payload,
        loggedUser: action.loggedUser
      }
    case UNAUTORIZED_USER:
      return {
        ...state,
        authorized: action.payload
      }
    default:
      return state;
  }
};

export default users;