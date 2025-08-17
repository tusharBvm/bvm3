import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../actions/crudActions";
import "bootstrap/dist/css/bootstrap.min.css";

const Crud = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [editIndex, setEditIndex] = useState(null);

  const form = {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedLanguages = [...formData.languages];

    if (checked) {
      updatedLanguages.push(value);
    } else {
      updatedLanguages = updatedLanguages.filter((lang) => lang !== value);
    }

    setFormData({ ...formData, languages: updatedLanguages });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      dispatch(updateUser(editIndex, formData));
    } else {
      dispatch(addUser(formData));
    }
    
    setFormData(form);
    setEditIndex(null);
  };

  const DeleteHandler = (index) => {
    dispatch(deleteUser(index));
  };

  const UpdateHandler = (user, index) => {
    setFormData(user);
    setEditIndex(index);
  };

  return (
    <>
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
                    required
                  />
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
                    required
                  />
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
                    required
                  />
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
                    required
                  />
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
                  required
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
              </div>

              <div className="mb-3 col-6 ms-5">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                  required
                >
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Jamnagar">Jamnagar</option>
                  <option value="Vadodara">Vadodara</option>
                </select>
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
                    required
                  />
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
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <button type="submit" className="form-control btn btn-primary">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Languages</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.city}</td>
                <td>{user.languages.join(", ")}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => DeleteHandler(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => UpdateHandler(user, index)}
                  >
                    Edit
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
