import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/crudActions";

const initialState = {
  users: [],
};

const crudReducer = (state = initialState, action) => {
  // console.log("action of type ==>", action.type);
  // console.log("action payload ==>", action.payload);

  // console.log("state ==>", state);
  // console.log("users delete filter==>",state.users.filter((userId) => console.log("userId==>",userId)));

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
        // users: state.users.filter((_, index) => index !== action.payload),
        users: state.users.filter((userId) => userId.id !== action.payload),
      };

    // case UPDATE_USER:
    //   const { index, user } = action.payload;
    //   const updatedUsers = [...state.users];
    //   // console.log("updatedUsers===>",updatedUsers)
    //   updatedUsers[index] = user;
    //   // console.log("user==>",user);
    //   return {
    //     ...state,
    //     users: updatedUsers,
    //   };


    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          // console.log("user==>",user)
          //  console.log("similar id ==>", user.id == action.payload.id )
          // console.log("update filter==>",user.id === action.payload.id ? {...user,...action.payload} : user)
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    default:
      return state;
  }
};

export default crudReducer;
