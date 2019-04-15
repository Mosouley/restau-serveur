package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Vente;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/vente")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class VenteController extends CrudController<Vente> {

}
