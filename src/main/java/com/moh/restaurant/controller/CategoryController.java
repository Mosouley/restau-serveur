package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Produit;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/produit")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class ProduitContoller extends CrudController<Produit,Long> {

}
