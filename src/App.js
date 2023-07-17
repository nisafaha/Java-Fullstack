import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from './layout/Navbar1.js';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Login from './Register/Login';

function App() {
  return (
    <div className="bg">
      <Router>
        <Navbar1 />
        
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users/add" element={<AddUser />} />
        <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/login" element={<Login />} />
        </Routes> 
      </Router>
      
    </div>
  );
}

export default App;
