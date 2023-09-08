package com.example.restsimple.repository;

import com.example.restsimple.entities.Employees;
import org.springframework.data.repository.CrudRepository;

public interface EmployeesRepository extends CrudRepository<Employees, Long> {
}
