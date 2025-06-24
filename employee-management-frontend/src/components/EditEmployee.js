import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    dateOfJoining: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8081/api/employees/${id}`)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/api/employees/${id}`, employee)
      .then(() => {
        alert('✅ Employee updated successfully');
        navigate('/employees');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center text-primary mb-4">Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={employee.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" name="phone" className="form-control" value={employee.phone} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input type="text" name="department" className="form-control" value={employee.department} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Joining</label>
            <input type="date" name="dateOfJoining" className="form-control" value={employee.dateOfJoining} onChange={handleChange} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-warning px-4">Update Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
