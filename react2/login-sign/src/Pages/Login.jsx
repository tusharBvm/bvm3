import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const storedData = localStorage.getItem("form-store");
  
  
  const userData = JSON.parse(storedData);
  // console.log("userData==>",userData);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    // console.log("name ==>", name);
    // console.log("value ==>", value);

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function submitHandler(e) {
    e.preventDefault();
    // console.log("loginData==>", loginData);
    // console.log(loginData.password)

    const { email, password } = loginData;

  

    let newErrors = validateForm({
      email,
      password,
    });
    setErrors(newErrors);

    const userFind =
      loginData.email && loginData.password
        ? userData.filter(
            (el) =>
              el.email === loginData.email && el.password === loginData.password
          )
        : "No Data Found";
    console.log("userFind ==>", userFind);
    
    // console.log("userFind email ==>", userFind[0].email);
    // console.log("userFind password ==>", userFind[0].password);
    //  email !== userFind[0].email

      if (!email || !password  ) {
      let newErrors = validateForm({
        email,
        password,
      });
      // console.log("newErrors==>", newErrors);
      setErrors(newErrors);
      return;
    }


    setLoginData({
      email: "",
      password: "",
    });
  }

  const validateForm = (errorData) => {
    // console.log("errorData==>",errorData);

    const errors = {};
    // console.log("errors ==>",errors);

    if (!errorData.email.trim()) {
      errors.email = "Email is required";
    }else if (errorData.email ) {
      
    }

    if (!errorData.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };
  return (
    <>
      <div className="main">
        <div className="login-cnt">
          <div>
            <h2 className="text-center mb-3 ">Login</h2>
          </div>
          <form>
            <div className="mb-3 col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handlerChange}
                value={loginData.email}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="mb-3 mt-5 col-12">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handlerChange}
                value={loginData.password}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="mb-3 mt-3">
              <button
                type="submit"
                className="form-control log-submit"
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
