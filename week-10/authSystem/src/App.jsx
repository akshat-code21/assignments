import './App.css';
import './index.css'
import AppBar from './components/AppBar';
import Login from './components/Login';
import Home from './components/Home'
import { useState } from 'react';
function App() {
  const [isLogin,setIsLogin] = useState(false)
  const [name,setName] = useState("")
  const handleSwitch = () =>{
    // console.log('hi');
    setIsLogin(false)
    
  }
  return (
    <div>
      <AppBar isLogin={isLogin} setIsLogin={setIsLogin} name={name} setName={setName}></AppBar>
      <div style={{
        height : 50,
        width : '100vw',
        backgroundColor : 'aqua',
        display : "flex",
        alignItems : "center",
        position : 'relative',
      }}>
        <button style={{
          position : "absolute",
          right : 10,
          backgroundColor: "#3f98b5",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: 4,
          cursor: "pointer",
        }} onClick={handleSwitch}>
          Switch to ContextAPI
        </button>
      </div>
      {isLogin ? <Home></Home> : <Login setIsLogin={setIsLogin} setName={setName}></Login>}
    </div>
  );
}

export default App;
