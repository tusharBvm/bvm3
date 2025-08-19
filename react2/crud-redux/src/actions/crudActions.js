export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

// export const deleteUser = (index) => ({
//   type: DELETE_USER,
//   payload: index,
// });

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

// export const updateUser = (index,user) => ({
//   type: UPDATE_USER,
//   payload: {index,user},
// });

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
});



// export const deleteUser = (id) => {
//     // console.log("id==>",id);
//   return {
//     type: DELETE_USER,
//     payload: id,
//   };
// };

// export const addUser = (user) => {
//     // console.log("user==>",user);

//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

// export const updateUser = (user) => {
//   console.log("user==>", user);

//   return {
//     type: UPDATE_USER,
//     payload: user,
//   };
// };
