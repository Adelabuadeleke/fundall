import { StateContext } from "./StateProvider";

export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN"
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user:action.user
      }
      default:
        return state;
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token:action.token
      }    
  }
}

export default reducer;

