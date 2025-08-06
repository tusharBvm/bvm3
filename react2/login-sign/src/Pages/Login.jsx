import React from "react";

function Login() {
  return (
    <>
      <div className="main">
        <div className="login-cnt">
          <div>
            <h2 className="text-center mb-3 ">Login</h2>
          </div>
          <form>
           
              <div class="mb-3 col-12">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" />
              </div>

              <div class="mb-3 mt-5 col-12">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" />
              </div>

            <div class="mb-3 mt-3">
              <button type="submit" class="form-control log-submit">
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
