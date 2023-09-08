package com.example.restsimple.interfaces;

import com.example.restsimple.entities.Employees;

import java.util.List;

public interface EmployeesServiceInterface {
    List<Employees> getAll();

    Employees getById(Long id);

    void save(Employees employee);

    void remove(Long id);

    void update(Employees employee);
}
