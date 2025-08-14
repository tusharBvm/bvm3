import React from "react";

const Select = ({
  languagesOptions,
  genderOptions,
  options,
  className,
  name,
  onChange,
  value,
}) => {
  return (
    <>
      <select
        className={className}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select All</option>
        {
          // options ?
          options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
            // console.log("options==>",options)
          ))

          //  ====>  hard way   <==

          // : ''
          // ||  genderOptions ? genderOptions.map((option)=>(
          //   // console.log("genderOptions==>",genderOptions)
          //   // console.log("option==>",option)
          //    <option key={option.value} value={option.value}>
          //     {option.value}
          //   </option>
          // )) : ''
          // || languagesOptions ? languagesOptions.map((option) =>(
          //   // console.log("languagesOptions==>",languagesOptions)
          //   // console.log("option==>",option)
          //        <option key={option.value} value={option.value}>
          //     {option.value}
          //   </option>
          // )) : ''
        }
      </select>
    </>
  );
};

export default Select;




