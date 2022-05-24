import { useState } from "react";
import { fetchData } from "../../API/api-service";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import ErrorToast from "../ErrorToast/ErrorToast";

export default function Login() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const usersURL = "";

  const handleLogin = (e) => {
    e.preventDefault();

    fetchData(usersURL).then((receivedData) => {
      receivedData.forEach((user) => {
        if (
          user.userName === inputUsername &&
          user.password === inputPassword
        ) {
          navigate("/dashboard");
        } 
        else if (inputUsername.length === 0 || inputPassword.length === 0){
          setError({message: "No input can be empty"});
        }
        else {
          setError({message: "Your password/username is wrong"});
        }
      });
    });
  };

  return (
    <>
      {error && <ErrorToast message={error.message}/>}
      <Form
        buttonText="Login"
        classNameButton="login-button"
        inputUsername={inputUsername}
        inputPassword={inputPassword}
        setInputUsername={setInputUsername}
        setInputPassword={setInputPassword}
        handleSubmit={handleLogin}
      />
    </>
  );
}
