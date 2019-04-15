package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Sortie;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/sortie")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class SortieController extends CrudController<Sortie> {

}
