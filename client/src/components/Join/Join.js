import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/style.css";
import { useHistory } from "react-router-dom";

let socket;

const Join = () => {
  const history = useHistory();
 
  useEffect(() => {
    const ENDPOINT = "localhost:9999";
    socket = io(ENDPOINT);

  }, [history]);

  const handleRegister = () => {
    history.push(`/register`)
  };

  const handleLogin = () => {
    history.push(`/login`)
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100 text-center">

      <div className="w-50">
        <h1 className="color-text font-weight-bold mb-4">V-chat</h1>
        <button onClick={handleLogin}
          className="btn mt-4">
          Sign In
        </button>
        <button
          onClick={handleRegister}
          className="btn mt-4 ml-1">
          Register
        </button>
      </div>
    </div>
  );
};

export default Join;
