import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/crudActions";

const initialState = {
  users: [],
};

const crudReducer = (state = initialState, action) => {
  // console.log("action ==>",action.type);
  // console.log("state ==>",state);
  switch (action.type) {
    case ADD_USER:
      // console.log("state ==>",state)
      // console.log("action payload ==>",action.payload)
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((_, index) => index !== action.payload),
      };
    case UPDATE_USER:
      const { index, user } = action.payload;
      const updatedUsers = [...state.users];
      updatedUsers[index] = user;
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default crudReducer;
