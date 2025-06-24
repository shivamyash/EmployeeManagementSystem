# EmployeeManagementSystem

1.Configure MySQL
Open src/main/resources/application.properties and update:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=shivamyash@123

2.Start the backend

From the backend directory:

cd backend_fileName
mvn spring-boot:run
Backend will run on:
📍 http://localhost:8081

💻 Frontend Setup (React)
✅ Prerequisites
Node.js

npm (or yarn)

VS Code or any code editor

🔧 Steps
Open terminal:

cd frontend
npm install
Start React app:

bash
Copy
Edit
npm start
React will start on:
📍 http://localhost:3000

🗃️ Database Schema (MySQL)
Run the following SQL to create the database and table:

sql
Copy
Edit
CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE IF NOT EXISTS employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    department VARCHAR(50),
    date_of_joining DATE
);
✅ Note: Spring Boot will automatically create/update the table if spring.jpa.hibernate.ddl-auto=update is set.

🔐 Admin Login (Hardcoded)
Use the following credentials:

Username: admin

Password: admin123

Session is stored in sessionStorage on successful login.
