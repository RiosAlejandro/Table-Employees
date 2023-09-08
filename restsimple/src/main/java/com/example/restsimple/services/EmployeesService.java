package com.example.restsimple.services;

import com.example.restsimple.entities.Employees;
import com.example.restsimple.interfaces.EmployeesServiceInterface;
import com.example.restsimple.repository.EmployeesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeesService implements EmployeesServiceInterface {

    @Autowired
    private EmployeesRepository repository;

    @Override
    public List<Employees> getAll() { return (List<Employees>) repository.findAll(); }

    @Override
    public Employees getById(Long id) { return (Employees) repository.findById(id).get(); }

    @Override
    public void save(Employees employee) { repository.save(employee); }

    @Override
    public void remove(Long id) { repository.deleteById(id); }

    @Override
    public void update(Employees employee) { repository.save(employee); }

}
