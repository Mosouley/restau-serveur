package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Fournisseur;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/fournisseur")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class FournisseurContoller extends CrudController<Fournisseur> {

}
