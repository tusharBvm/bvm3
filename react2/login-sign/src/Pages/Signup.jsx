import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    langauges: [],
    phone: "",
    age: "",
  });

  // console.log("formData ==>",formData);

  // checked={allChecked ? true : isChecked[test.name]}

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
     const { languages } = formData;
    console.log("languges ==>",languages);
    // console.log("name ==>",name);
    // console.log("value==>",value);
    // console.log("checked==>", checked);

    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));

  // console.log( [...formData.langauges, value])

  
    
    
    setFormData({ ...formData, [name]: value });

    // console.log("[name]==>", [name]);
  };

  function submitHandler(e) {
    e.preventDefault();
    console.log("formData ==>", formData);
  }

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
                  // value={formData.firstName}
                />
              </div>

              <div className="mb-3 ">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  onChange={handleChange}
                  // value={formData.lastName}
                />
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
                  // value={formData.email}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  // value={formData.password}
                />
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
                />
                &nbsp; Male &nbsp;
                <input
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  name="gender"
                  onChange={handleChange}
                />
                &nbsp; Female
              </div>

              <div className="mb-3 cnt-set col-6">
                <label className="form-label">Select City</label>
                <select
                  className="form-select"
                  name="city"
                  onChange={handleChange}
                  // value={formData.city}
                >
                  <option value="">Select City</option>
                  <option value="Surat">Surat</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Junagadh">Junagadh</option>
                </select>
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
                      
                    />
                    &nbsp; English
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="Hindi"
                      name="languages"
                      onChange={handleChange}
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
                />
              </div>

              <div className="mb-3 col-6">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  min={1}
                  max={100}
                  name="age"
                />
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
