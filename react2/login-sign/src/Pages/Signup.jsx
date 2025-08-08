import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    city: "",
    languages: [],
    phone: "",
    age: "",
  });

  // console.log("formData ==>",formData);
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const storedData = localStorage.getItem("form-store");
    if (storedData) {
      setSubmittedData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log("name ==>",name);
    // console.log("value==>", value);
    // console.log("type==>", type);
    // console.log("checked==>", checked);
    // console.log("firstaname ==>",formData.firstName);

    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));

    if (type === "checkbox") {
      if (name === "languages") {
        setFormData((prev) => {
          if (checked) {
            // console.log("prev ==>", prev);
            // console.log("prev lang ==>",[...prev.languages, value]);
            return {
              ...prev,
              languages: [...prev.languages, value],
            };
          } else {
            // console.log("prev ==>", prev);
            // console.log("prev lang filter==>", prev.languages.filter((lang) => lang !== value));
            return {
              ...prev,
              languages: prev.languages.filter((lang) => lang !== value),
            };
          }
        });
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // setFormData({ ...formData, [name]: value });

    // console.log("[name]==>", [name]);
  };

  function submitHandler(e) {
    e.preventDefault();
    // console.log("formData ==>", formData);

    // console.log("formData ==>", formData);

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
      city,
      languages,
      phone,
      age,
    } = formData;

    // if (password !== confirmPassword) {
    //     return;
    // }

    // console.log(
    //   firstName +
    //     "," +
    //     lastName +
    //     "," +
    //     email +
    //     "," +
    //     password +
    //     "," +
    //     confirmPassword +
    //     "," +
    //     gender +
    //     "," +
    //     city +
    //     "," +
    //     languages +
    //     "," +
    //     phone +
    //     "," +
    //     age
    // );

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !gender ||
      !city ||
      languages.length == 0 ||
      !phone ||
      !age ||
      password !== confirmPassword
    ) {
      let newErrors = validateForm({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        gender,
        city,
        languages,
        phone,
        age,
      });
      //   console.log("new errors ==> ", newErrors);
      setErrors(newErrors);
      return;

    }

    let newErrors = validateForm({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
      city,
      languages,
      phone,
      age,
    });

    // console.log("new errors ==> ", newErrors);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // console.log("submitData ==>",submittedData);
      const newSubmittedData = [...submittedData, formData];
      //   console.log("new Submitted data ==>",newSubmittedData);
      setSubmittedData(newSubmittedData);
      localStorage.setItem("form-store", JSON.stringify(newSubmittedData));

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        city: "",
        languages: [],
        phone: "",
        age: "",
      });
    }

    navigate('/login')

    // console.log("formData ==>", formData);
  }

  const validateForm = (errorData) => {
    // console.log("errorData ==>", errorData);

    const errors = {};
    // console.log("errors ==>", errors);

    if (!errorData.firstName.trim()) {
      errors.firstName = "FirstName is required";
    }

    if (!errorData.lastName.trim()) {
      errors.lastName = "LastName is required";
    }

    if (!errorData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(errorData.email)) {
      errors.email = "Email is invalid";
    }

    if (!errorData.password) {
      errors.password = "Password is required";
    } else if (errorData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!errorData.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required";
    } else if (errorData.password !== errorData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!errorData.gender) {
      errors.gender = "Gender is required";
    }

    if (!errorData.city) {
      errors.city = "City is required";
    }

    if (errorData.languages.length == 0) {
      errors.languages = "Language is required";
    }

    if (!errorData.phone) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!errorData.age) {
      errors.age = "Age Is required";
    }

    return errors;
  };

  return (
    <>
      <div className="main">
        <div className="sign-cnt">
          <div>
            <h2 className="text-center mb-3 ">Signup</h2>
          </div>
          <form>
            <div className="d-flex gap-3">
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

              <div className="mb-3 ">
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
            <div className="d-flex gap-3">
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
            <div>
              <div className="mb-3">
                <label className="form-label">ConFirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                />
                {errors.confirmPassword && (
                  <span className="error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>
            <div className="d-flex ">
              <div className="mb-3 col-6">
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
                &nbsp; Female <br />
                {errors.gender && (
                  <span className="error-message">{errors.gender}</span>
                )}
              </div>

              <div className="mb-3 cnt-set col-6">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  name="city"
                  onChange={handleChange}
                  value={formData.city}
                >
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Junagadh">Junagadh</option>
                </select>
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>
            </div>
            <div>
              <div className="mb-3">
                <label className="form-label">Language</label> <br />
                <div className="d-flex gap-5">
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="English"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("English")}
                    />
                    &nbsp; English <br />
                    {errors.languages && (
                      <span className="error-message">{errors.languages}</span>
                    )}
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Hindi"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("Hindi")}
                    />
                    &nbsp; Hindi
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Gujrati"
                      name="languages"
                      onChange={handleChange}
                      checked={formData.languages.includes("Gujrati")}
                    />
                    &nbsp; Gujrati
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="mb-3 ">
                <label className="form-label">Phone No.</label>
                <input
                  type="tel"
                  className="form-control"
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="mb-3 col-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  min={1}
                  max={100}
                  name="age"
                  value={formData.age}
                  required
                  onChange={handleChange}
                />
                {errors.age && (
                  <span className="error-message">{errors.age}</span>
                )}
              </div>
            </div>
            <div className="mb-3 mt-3">
              <button
                type="submit"
                className="form-control submit"
                onClick={submitHandler}
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
