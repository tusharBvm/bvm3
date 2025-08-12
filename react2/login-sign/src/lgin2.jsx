import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  let navigate = useNavigate();

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ""}));
    }
  };

  function submitHandler(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { email, password } = loginData;
    const storedData = JSON.parse(localStorage.getItem("form-store") || "[]");
    
    // Basic validation
    let newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Check credentials
    const user = storedData.find(
      (user) => user.email === email && user.password === password
    );
    
    if (!user) {
      setErrors({
        email: "Invalid credentials",
        password: "Invalid credentials"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Successful login
    localStorage.setItem("email-store", user.email);
    localStorage.setItem("pass-store", user.password);
    
    setLoginData({
      email: "",
      password: "",
    });
    
    setIsAuthenticated(true);
    navigate("/data");
  }

  return (
    <div className="main">
      <div className="login-cnt">
        <div>
          <h2 className="text-center mb-3">Login</h2>
        </div>
        <form onSubmit={submitHandler}>
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
