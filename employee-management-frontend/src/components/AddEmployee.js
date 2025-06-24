import React, { useState } from 'react';
import { addEmployee } from '../services/employeeService';

export default function AddEmployee() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', department: '', dateOfJoining: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(form);
    alert("✅ Employee added successfully");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center text-primary">Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" name="phone" className="form-control" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Department</label>
            <input type="text" name="department" className="form-control" value={form.department} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Joining</label>
            <input type="date" name="dateOfJoining" className="form-control" value={form.dateOfJoining} onChange={handleChange} required />
          </div>
          <div className="text-center">
            <button className="btn btn-success px-4">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  );
}
