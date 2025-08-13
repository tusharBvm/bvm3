import React from "react";

function Button({ backgroundColor, value, color }) {
  return (
    <>
      <button style={{ backgroundColor, color}}>{value}</button>
    </>
  );
}

export default Button;

// direct passing style 

// import React from "react";

// function Button({ value, style }) {
//   return (
//     <>
//       <button style={style}>{value}</button>
//     </>
//   );
// }

// export default Button;
