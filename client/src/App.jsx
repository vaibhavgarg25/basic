import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Contact from './pages/contact';
import Error from './pages/Error'
import Logout from './pages/Logout';
import Service from './pages/Service';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contactus" element={<Contact/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
