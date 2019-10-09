package com.moh.restaurant.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class DashBoardController {

    @GetMapping
    public String Hello(){
        return "Application de Gestion Restaurant ";
    }
}
