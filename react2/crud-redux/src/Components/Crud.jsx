import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../actions/crudActions";
import "bootstrap/dist/css/bootstrap.min.css";

const Crud = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  // console.log("users=>",users);

  // let data = Date.now()
  // console.log("data ==>",data);

  const form = {
    id: Date.now(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    languages: [],
    age: "",
    phone: "",
  };

  const [formData, setFormData] = useState(form);
  // console.log("formData==>", formData);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectTerm, setSelectTerm] = useState("");

  const tableHead = [
    "No",
    "FirstName",
    "LastName",
    "Email",
    "Password",
    "Gender",
    "City",
    "Languages",
    "Age",
    "Phone",
    // "Id",
    "Delete",
    "Update",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    //  setFormData((prevState) =>{
    //   return (
    //     console.log("prevstate -->",prevState)
    //   )
    //  })
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedLanguages = [...formData.languages];
    // console.log("updatedLanguages==>",updatedLanguages);

    if (checked) {
      updatedLanguages.push(value);
    } else {
      updatedLanguages = updatedLanguages.filter((lang) => lang !== value);
    }
    setFormData({ ...formData, languages: updatedLanguages });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      city,
      languages,
      age,
      phone,
    } = formData;
    // console.log("firstName==>",firstName);
    // console.log("lastName==>",lastName);

    // console.log("formData==>",formData);

    const newErrors = validateForm({
      firstName,
      lastName,
      email,
      password,
      gender,
      city,
      languages,
      age,
      phone,
    });
    // console.log("newErrors==>", newErrors);
    setErrors(newErrors);

    //   if (Object.keys(newErrors).length === 0) {
    //     if (editIndex !== null) {
    //       dispatch(updateUser(editIndex, formData));
    //       setFormData(form);
    //       setEditIndex(null);
    //     } else {
    //       dispatch(addUser({ ...formData }));
    //       setFormData(form);
    //     }
    //   }
    // };

    if (Object.keys(newErrors).length === 0) {
      if (editIndex !== null) {
        dispatch(updateUser(formData));
        setFormData(form);
        setEditIndex(null);
      } else {
        dispatch(addUser({ ...formData }));
        setFormData(form);
      }
    }
  };

  // const DeleteHandler = (index) => {
  //   // console.log("index==>",index);
  //   dispatch(deleteUser(index));
  // };

  const DeleteHandler = (id) => {
    // console.log("id==>",id);
    dispatch(deleteUser(id));
  };

  // const UpdateHandler = (user, index) => {
  //   // console.log("user==>", user);
  //   setFormData(user);
  //   setEditIndex(index);
  // };

  const UpdateHandler = (user) => {
    // console.log("user==>", user);
    // console.log("userId==>", userId);
    setFormData(user);
    setEditIndex(user.id);
  };

  const validateForm = (errorData) => {
    // console.log("errorData===>", errorData);

    const errors = {};

    if (!errorData.firstName.trim()) {
      errors.firstName = "First Name is Required";
    }

    if (!errorData.lastName.trim()) {
      errors.lastName = "Last Name is Required";
    }

    if (!errorData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(errorData.email)) {
      errors.email = "Email is invalid";
    }

    if (!errorData.password.trim()) {
      errors.password = "Password is Required";
    }

    if (!errorData.gender) {
      errors.gender = "Select a Gender";
    }

    if (!errorData.gender) {
      errors.gender = "Select a Gender";
    }

    if (!errorData.city) {
      errors.city = "Select a City";
    }

    if (errorData.languages.length == 0) {
      errors.languages = "Select Languages";
    }

    if (!errorData.age) {
      errors.age = "Age is Required";
    }

    if (!errorData.phone) {
      errors.phone = "Phone is Required";
    }

    return errors;
  };

  const searchHandler = (e) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const selectHandler = (e) => {
    // console.log(e.target.value);
    setSelectTerm(e.target.value);
  };

  const filterList = searchTerm
    ? users.filter(
        (el) =>
          // console.log("el ==>", el)
          el.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.password.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.phone.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : users && selectTerm
    ? users.filter(
        (el) =>
          // console.log("el==>",el)
          el.city.toLowerCase().includes(selectTerm.toLowerCase()) ||
          el.gender.toLowerCase() === selectTerm.toLowerCase() ||
          el.languages.join().toLowerCase().includes(selectTerm.toLowerCase())
      )
    : users;

  // console.log("filterList==>", filterList);

  return (
    <>
      {/* <div>
        <form onSubmit={submitHandler}>
          <input type="text" name="firstName" onChange={handleChange} />
          <input type="text" name="lastName" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>

        <br />
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>No</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                // console.log(user)
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="main-cnt">
        <div className="form-cnt">
          <form onSubmit={submitHandler}>
            <div className="d-flex gap-3">
              <div>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  {errors.password && (
                    <span className="error-message">{errors.password}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div className="mb-3 ">
                <label className="form-label">Gender</label>
                <br />
                <input
                  type="radio"
                  className="form-check-input"
                  value="Male"
                  name="gender"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                />
                &nbsp; Male &nbsp;
                <input
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  name="gender"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                />
                &nbsp; Female &nbsp;
                {errors.gender && (
                  <span className="error-message">{errors.gender}</span>
                )}
              </div>

              <div className="mb-3 col-6 ms-5">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                >
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Jamnagar">Jamnagar</option>
                  <option value="Vadodara">Vadodara</option>
                </select>
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>
            </div>

            <div>
              <div className="mb-3 ">
                <label className="form-label">Languages</label>
                <br />
                <input
                  type="checkbox"
                  className="form-check-input "
                  value="English"
                  name="languages"
                  onChange={handleCheckboxChange}
                  checked={formData.languages.includes("English")}
                />
                &nbsp; English &nbsp;
                <input
                  type="checkbox"
                  className="form-check-input ms-5"
                  value="Hindi"
                  name="languages"
                  onChange={handleCheckboxChange}
                  checked={formData.languages.includes("Hindi")}
                />
                &nbsp; Hindi &nbsp;
                <input
                  type="checkbox"
                  className="form-check-input ms-5"
                  value="Gujrati"
                  name="languages"
                  onChange={handleCheckboxChange}
                  checked={formData.languages.includes("Gujrati")}
                />
                &nbsp; Gujrati &nbsp;
                <br />
                {errors.languages && (
                  <span className="error-message">{errors.languages}</span>
                )}
              </div>
            </div>

            <div className="d-flex gap-3">
              <div>
                <div className="mb-3 ">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control age-width"
                    name="age"
                    min={1}
                    max={100}
                    onChange={handleChange}
                    value={formData.age}
                  />
                  {errors.age && (
                    <span className="error-message">{errors.age}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    minLength={10}
                    maxLength={10}
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <button type="submit" className="form-control submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />
      {/* filter */}

      <div>
        <div className="mb-3 col-4 ms-4">
          <label className="form-label">Search Here</label>
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Search Here"
            onChange={searchHandler}
            value={searchTerm}
          />
        </div>
      </div>
      <div className="d-flex gap-2">
        <div className="mb-3 col-3 ms-5">
          <label className="form-label">Select City</label>
          <select
            className="form-select"
            name="findCity"
            onChange={selectHandler}
            value={selectTerm}
          >
            <option value="">Select City</option>
            <option value="Surat">Surat</option>
            <option value="Jamnagar">Jamnagar</option>
            <option value="Vadodara">Vadodara</option>
          </select>
        </div>
        <div className="mb-3 col-3 ms-5">
          <label className="form-label">Select Gender</label>
          <select
            className="form-select"
            name="findGender"
            onChange={selectHandler}
            value={selectTerm}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3 col-3 ms-5">
          <label className="form-label">Select Language</label>
          <select
            className="form-select"
            name="findLanguage"
            onChange={selectHandler}
            value={selectTerm}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Gujrati">Gujrati</option>
          </select>
        </div>
      </div>
      <br />
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              {/* <th>No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>  
              <th>Password</th>
              <th>Gender</th>
              <th>City</th>
              <th>Languages</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Update</th> */}
              {tableHead.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterList.map((user, index) => (
              // console.log("user===>",user)
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.gender}</td>
                <td>{user.city}</td>
                <td>{user.languages.join(",")}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                {/* <td>{user.id}</td> */}
                <td>
                  <button
                    className="btn btn-light"
                    // onClick={() => DeleteHandler(index)}
                    onClick={() => DeleteHandler(user.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-light"
                    // onClick={() => UpdateHandler(user, index)}
                    onClick={() => UpdateHandler(user)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Crud;
