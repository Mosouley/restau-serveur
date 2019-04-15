package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Entree;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/entree")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class EntreeController extends CrudController<Entree> {

}
