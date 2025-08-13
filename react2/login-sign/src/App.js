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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // console.log("isAuthenticated ==>",isAuthenticated);
  

  useEffect(() => {
    const email = localStorage.getItem("email-store");
    const password = localStorage.getItem("pass-store");
    if (email && password) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? (<Navigate to="/data" /> ) : (<Navigate to="/signup" /> ) }
        />
        <Route
          path="/signup"
          element={ isAuthenticated ? (<Navigate to="/data" />  ) : (<Signup setIsAuthenticated={setIsAuthenticated} />)}
        />
        <Route
          path="/login"
           element={ isAuthenticated ? (<Navigate to="/data" /> ) : (<Login setIsAuthenticated={setIsAuthenticated} />)}
        />
        <Route
          path="/data"
          element={ isAuthenticated ? (<FormData setIsAuthenticated={setIsAuthenticated} /> ) : (<Navigate to="/login" />)}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;



