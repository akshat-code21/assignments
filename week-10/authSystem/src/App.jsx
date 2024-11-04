import './App.css';
import './index.css'
import AppBar from './components/AppBar';
import Login from './components/Login';
import Home from './components/Home'
import { useState } from 'react';
function App() {
  const [isLogin,setIsLogin] = useState(false)
  const [name,setName] = useState("")
  return (
    <div>
      <AppBar isLogin={isLogin} setIsLogin={setIsLogin} name={name} setName={setName}></AppBar>
      {isLogin ? <Home></Home> : <Login setIsLogin={setIsLogin} setName={setName}></Login>}
    </div>
  );
}

export default App;
