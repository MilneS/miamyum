import { createStore } from "redux";


const loginReducer = (state = { loggedin: false }, action) => {
  if (action.type === "login") {
    return { loggedin: (state.loggedin = true) };
  }
  if(action.type==="logout"){
      return{
          loggedin: state.loggedin= false
      }
  }
  return state
};

const store = createStore(loginReducer);

export default store;
