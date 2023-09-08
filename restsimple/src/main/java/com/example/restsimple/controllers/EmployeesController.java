package com.example.restsimple.controllers;

import com.example.restsimple.entities.Employees;
import com.example.restsimple.services.EmployeesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeesController {

    @Autowired
    private EmployeesService service;

    /**
     * comentario hecho con java doc, se pone barra inclinada + dos asteriscos + enter
     * @return
     */

    @GetMapping("/api/employees")
    public List<Employees> getAll() { return service.getAll(); }

    @GetMapping("/api/employees/{id}")
    public Employees getById(@PathVariable Long id) { return service.getById(id); }

    @PostMapping("/api/employees")
    public void save(@RequestBody Employees employee) { service.save(employee); }

    @DeleteMapping("/api/employees/{id}")
    public void delete(@PathVariable Long id) { service.remove(id); }

    @PutMapping("/api/employees")
    public void update(@RequestBody Employees employee) { service.update(employee); }

}
