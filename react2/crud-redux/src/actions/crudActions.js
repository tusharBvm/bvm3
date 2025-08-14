
export const ADD_USER = "ADD_USER";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

// export const addUser = (user) => {
//     console.log("user==>",payload);
    
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

