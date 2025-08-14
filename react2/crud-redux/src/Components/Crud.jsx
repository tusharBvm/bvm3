import React, { useEffect, useState } from "react";
import { addUser } from "../actions/crudActions";
import { useDispatch, useSelector } from "react-redux";

const Crud = () => {
  const form = {
    firstName: "",
    lastName: "",
  };
  const [formData, setFormData] = useState(form);
//   console.log("formData==>", formData);

  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  //   console.log("list=>",list);

  useEffect(() => {
    dispatch(addUser());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    const { firstName, lastName } = formData;
    // console.log("formData==>",firstName);
    
  };

  return (
    <>
      <input type="text" name="firstName" onChange={handleChange} />
      <input type="text" name="lastName" onChange={handleChange} />

      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </>
  );
};

export default Crud;
