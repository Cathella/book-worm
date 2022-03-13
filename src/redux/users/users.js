const REGISTER = 'bookWorm/users/REGISTER';
const LOGIN = 'bookWorm/users/LOGIN';
const LOGOUT = 'bookWorm/users/LOGOUT';

const initialState = [];

export const register = payload => ({
  type: REGISTER,
  payload,
});

export const login = payload => ({
  type: LOGIN,
  payload,
});

export const logout = payload => ({
  type: LOGOUT,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return state;
    case LOGIN:
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default reducer;
