import { createStore } from "redux";

const initialState = {
  loggedin: !!localStorage.getItem("token"),
  showLoginComp: false,
  showSignupComp: false,
  idToken: localStorage.getItem("token"),
  userId: localStorage.getItem("userId"),
  showAddComments: false,
  showComments: false,
  allComments: {},
};


const loginReducer = (state = initialState, action) => {
  if (action.type === "login") {
    return { ...state, loggedin: true };
  }
  if (action.type === "getToken") {
    return { ...state, idToken: action.token };
  }
  if (action.type === "logout") {
    return { ...state, loggedin: false };
  }
  if (action.type === "showLogin") {
    return { ...state, showLoginComp: true, showSignupComp: false };
  }
  if (action.type === "showSignup") {
    return { ...state, showLoginComp: false, showSignupComp: true };
  }
  if (action.type === "close") {
    return { ...state, showLoginComp: false, showSignupComp: false };
  }
  if (action.type === "getUserId") {
    return { ...state, userId: action.localId };
  }
  if (action.type === "showAddComm") {
    return { ...state, showAddComments: true, showComments: false };
  }
  if (action.type === "showComm") {
    return { ...state, showAddComments: false, showComments: true };
  }
  if (action.type === "closeComm") {
    return { ...state, showComments: false, showAddComments: false };
  }
  if (action.type === "setComments") {
    return { ...state, allComments: action.payload };
  }

  return state;
};

const store = createStore(loginReducer);

export default store;
