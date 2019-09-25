package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Spending;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/spending")
// @CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class SpendingController extends CrudController<Spending> {
}
