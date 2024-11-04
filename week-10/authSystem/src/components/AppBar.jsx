import React from "react";
const navStyle = {
  backgroundColor: "#3f98b5",
  color: "white",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const rightStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};
const h1Style = {
  fontSize: "1.85rem",
  fontWeight: "bold",
};
const buttonStyle = {
  backgroundColor: "white",
  color: "#3f51b5",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
};
const AppBar = ({ isLogin, setIsLogin, name, setName }) => {
  const handleLogout = () => {
    setIsLogin((curr) => !curr);
    setName("");
  };
  return (
    <div className="nav" style={navStyle}>
      <div className="logo">
        <h1 style={h1Style}>Auth System</h1>
      </div>
      <div className="right" style={rightStyle}>
        <div className="greeting">
          <h2>Welcome {name} !</h2>
        </div>
        <div className="button">
          {isLogin ? (
            <button style={buttonStyle} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppBar;
