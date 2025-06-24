package com.example.ems.controller;

import com.example.ems.model.Employee;
import com.example.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeRepository repo;

    @GetMapping
    public List<Employee> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Employee add(@RequestBody Employee emp) {
        return repo.save(emp);
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody Employee emp) {
        emp.setId(id);
        return repo.save(emp);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
