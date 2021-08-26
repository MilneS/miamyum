import { createStore } from "redux";

const initialState={loggedin: false, showLoginComp:false, showSignupComp:false}
const loginReducer = (state = { initialState }, action) => {
  if (action.type === "login") {
    return {...state, loggedin: true };
  }
  if(action.type==="logout"){
      return{...state, loggedin: false}
  }
  if(action.type=== 'showLogin'){
      return{ ...state, showLoginComp:true, showSignupComp:false}
  }
  if(action.type=== 'showSignup'){
      return{ ...state, showLoginComp:false, showSignupComp:true}
  }
  if(action.type==='close'){
    return{...state, showLoginComp:false, showSignupComp:false}
  }
  return state
};

const store = createStore(loginReducer);

export default store;
