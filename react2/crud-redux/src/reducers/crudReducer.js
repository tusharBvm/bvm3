import { ADD_USER } from "../actions/crudActions";

const initialState = {
  list: [],
};

const crudReducer = (state = initialState, action) => {
//   console.log("action ==>",action.type);
//   console.log("state ==>",state);

  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default crudReducer;
