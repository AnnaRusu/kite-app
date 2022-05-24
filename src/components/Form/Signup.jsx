import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../API/api-service";
import ErrorToast from "../ErrorToast/ErrorToast";
import Form from "../../components/Form/Form";

export default function Signup() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const usersURL = "https://627fcffdbe1ccb0a4665209c.mockapi.io/user";

  const handleSignup = (e) => {
    e.preventDefault();

    const formInputData = {
      userName: inputUsername,
      password: inputPassword,
    };

    if (inputUsername.length === 0 || inputPassword.length === 0) {
      setError({ message: "No input can be empty" });
    }
    else {
      postData(usersURL, formInputData);
      navigate("/dashboard");
    }
  };

  return (
    <>
      {error && <ErrorToast message={error.message} />}
      <Form
        buttonText="Signup"
        classNameButton="signup-button"
        inputUsername={inputUsername}
        inputPassword={inputPassword}
        setInputUsername={setInputUsername}
        setInputPassword={setInputPassword}
        handleSubmit={handleSignup}
      />
    </>
  );
}
