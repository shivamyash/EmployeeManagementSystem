import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Employee List</Link> | <Link to="/add">Add Employee</Link>
        </nav>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;