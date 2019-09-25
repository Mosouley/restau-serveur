package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Appro;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/appro")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class ApproController extends CrudController<Appro> {

}
