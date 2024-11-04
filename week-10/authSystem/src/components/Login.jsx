import React, { useRef } from "react";
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: 300,
  margin: "0 auto",
  border: "1px solid",
  padding: "20px",
  marginTop: "200px",
};
const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};
const labelStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
};
const inputStyle = {
  padding: "0.5rem",
  borderRadius: 4,
  border: "1px solid #ccc",
};
const buttonStyle = {
  backgroundColor: "#3f98b5",
  color: "white",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: 4,
  cursor: "pointer",
};
const Login = ({ setIsLogin, setName }) => {
  const inputRef = useRef();
  const handleLogin = () => {
    if (inputRef.current.value === "") {
      alert("please enter a name");
      return;
    }
    setIsLogin((curr) => !curr);
    setName(inputRef.current.value);
    console.log(inputRef.current.value);
  };
  return (
    <div className="form" style={formStyle}>
      <div className="usernameField" style={formGroup}>
        <label htmlFor="" style={labelStyle}>
          Enter your name below
        </label>
        <input
          type="text"
          ref={inputRef}
          name=""
          id=""
          placeholder="Enter your name here"
          style={inputStyle}
        />
      </div>
      <div>
        <button style={buttonStyle} onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
