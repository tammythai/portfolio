import React, { useEffect, useState } from "react";

function Login(props) {
  const code = props.code; // code should either be null or 400
  const prompts = [
    "Do you want to log in?",
    "Are you sure you don't want to..?",
    "C'mon just log in already >:(",
    "Click on the yes please T_T",
    "Okay, I'll ask you one more time..!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleYes = (e) => {
    window.location.href = "http://localhost:3001/login";
  };

  const handleNo = (e) => {
    const promptsLength = prompts.length;
    setCurrentIndex((currentIndex) => (currentIndex + 1) % promptsLength);
  };

  return code === "400" ? (
    <div className="login">Login failed :(</div>
  ) : (
    <div className="login">
      <span>{prompts[currentIndex]}</span>
      <div className="login-buttons">
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </div>
    </div>
  );
}

export default Login;
