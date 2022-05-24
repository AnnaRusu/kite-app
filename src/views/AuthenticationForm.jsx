import { useState } from "react";
import "../assets/styles/Form.scss";
import Login from "../components/Form/Login";
import Signup from "../components/Form/Signup";

export default function AuthenticationForm() {
  const [accountState, setAccountState] = useState(true);

  return (
    <div className="container-auth">
      <h1 className="auth-title">Kite</h1>
      {accountState ? (
        <div className="form-wrapper">
          <h2>LOGIN</h2>
          <Login />

          <div className="form-footer">
            <p>Are you a new user?</p>
            <button
              className="signup-button"
              onClick={() => setAccountState(false)}
            >
              Signup
            </button>
          </div>
        </div>
      ) : (
        <div className="form-wrapper">
          <h2>SIGN UP</h2>
          <Signup />
          <div className="form-footer">
            <p>Already have an account?</p>
            <button
              className="login-button"
              onClick={() => setAccountState(true)}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
