import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/home/home';
import Login from './page/login/login'
import Register from './page/register/register'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
