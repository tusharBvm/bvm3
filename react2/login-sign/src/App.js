import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import FormData from "./Pages/FormData";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/form.css";
import Signup from "./Pages/Signup";
import { useEffect, useState } from "react";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   () => JSON.parse(localStorage.getItem("form-store")) || false
  // );

  // console.log("isAuthenticated ==>",isAuthenticated);


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email-store");
    const password = localStorage.getItem("pass-store");
    if (email && password) {
      setIsAuthenticated(true);
    }
  }, []);

  // console.log("isAuthenticated ==>",isAuthenticated);
  

  return (
    <>
      {/* <Routes>
      setIsAuthenticated = true and navigate
        <Route path="/" element={isAuthenticated == false ? <Signup/> : <Login/> && isAuthenticated !== false ?  <Login/> : <Signup/> } />
        <Route path="/login" element={ isAuthenticated == false ? <Signup/> : <Login /> && isAuthenticated !== false ? <Login/> : <Signup/>} />
        <Route path="/data" element={  isAuthenticated == false ? <Signup/> : <FormData/> && isAuthenticated !== false ? <FormData/> : <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      
      <Routes>
        <Route
          path="/"
          element={<Signup/>}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/data" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/data" element={isAuthenticated ?  <FormData setIsAuthenticated={setIsAuthenticated} /> :<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
