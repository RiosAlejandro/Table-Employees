package com.example.restsimple.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Employees")
public class Employees {

    @Id @GeneratedValue(strategy =  GenerationType.IDENTITY) @Getter @Setter
    private Long id;

    @Getter @Setter
    private String firstname;

    @Getter @Setter
    private String lastname;

    @Getter @Setter
    private String address;

    @Getter @Setter
    private String phone;

    @Getter @Setter
    private String email;

    @Getter @Setter
    private String position;

    @Getter @Setter
    private String city;

    @Getter @Setter
    private String area;



}
