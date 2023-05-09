import { ActionAuth } from "../actions/loginActions";
import { user } from "../types";


export interface AuthReducerType {
  isLoggedin: boolean;
  users: user[];
  isLoading: boolean,
  currentUderId: string
}

const initialState = {
  isLoggedin: false,
  users: [],
  isLoading: false,
  currentUderId: null
};

const authReducer = (state = initialState, action: ActionAuth) => {
  const { type } = action;
  switch (type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'SUCCESS_Fail':
      return {
        ...state,
        isLoading: false

      };
    case 'SUCCESS_LOGIN':
      return {
        ...state,
        isLoading: false,
        isLoggedin: true,
        users: [...state.users, action.user]
      };
    case 'SET_USER':
      return {
        ...state,
        currentUderId: action.payload
      };

    // setCurrentUser

    case "LOGOUT":
      return {
        ...initialState,
      };
    // 
    default:
      return state;
  }
};

export default authReducer;
