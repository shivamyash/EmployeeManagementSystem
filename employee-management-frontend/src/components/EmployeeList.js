import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../services/employeeService';
import { useNavigate } from 'react-router-dom';

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('auth')) navigate('/login');
    else loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      console.error("Error loading employees", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await deleteEmployee(id);
      loadEmployees();
    }
  };

  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Employee List</h2>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by name or department"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-success ms-3" onClick={() => navigate('/add')}>➕ Add Employee</button>
      </div>

      <div className="table-responsive shadow-sm">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Department</th><th>Date of Joining</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.department}</td>
                  <td>{emp.dateOfJoining}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" onClick={() => navigate(`/edit/${emp.id}`)}>✏️ Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(emp.id)}>🗑️ Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-muted">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
