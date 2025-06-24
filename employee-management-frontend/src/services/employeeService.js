import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/employees';

export const getEmployees = () => axios.get(API_BASE_URL);
export const addEmployee = (employee) => axios.post(API_BASE_URL, employee);
export const updateEmployee = (id, employee) => axios.put(`${API_BASE_URL}/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_BASE_URL}/${id}`);
export const getEmployeeById = (id) => axios.get(`${API_BASE_URL}/${id}`);
