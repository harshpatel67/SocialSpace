import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/style.css";
import { useHistory } from "react-router-dom";

let socket;

const Login = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
 
  useEffect(() => {
    const ENDPOINT = "localhost:9999";
    socket = io(ENDPOINT);

    socket.on("login.error", (check) => {
      if (check) {
        alert("Invalid username or password!");
      }
    });

    socket.on('authen.success', (authen) => {
      var token = authen.token;
      alert("Successfully login..!!!");
      history.push(`/chat?name=${authen.profile}&token=${token}`)
    })


  }, [history]);

  const handleLogin = () => {
    socket.emit("login", { name, password });

  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 text-center">

      <div className="w-50">
        <h1 className="color-text font-weight-bold mb-4">V-chat</h1>
        <div>
          <input
            id='username'
            placeholder="Name"
            className="my-4 px-4 py-2 shadow-sm border-0"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            id='password'
            placeholder="Password"
            className="mb-4 px-4 py-2 shadow-sm border-0"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button onClick={handleLogin}
          className="btn mt-4">
          Sign In
          </button>
      </div>
    </div>
  );
};

export default Login;
