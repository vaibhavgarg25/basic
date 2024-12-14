import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Contact from './pages/contact';
import Error from './pages/Error'
import Logout from './pages/Logout';
import Service from './pages/Service';
import Admin from './pages/Admin';
import User from './pages/User';
import Contactuser from './pages/Contactuser';
import ServiceAdmin from './pages/ServiceAdmin';
import Adminupdate from './pages/Adminupdate';

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
      <Route path="/admin" element={<Admin/>} >
        <Route path="user" element={<User/>} />
        <Route path="contact" element={<Contactuser/>} />
        <Route path="service" element={<ServiceAdmin/>} />
      </Route>
      <Route path="/admin/user/:userId/edit" element={<Adminupdate/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
