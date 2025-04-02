package com.example.SpringBootTutorial.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sample")
public class Samplecontroller {

    @GetMapping("/home")
    public void welcome(){
        System.out.println("Welcome to Springboot Tutorial");
    }
}
