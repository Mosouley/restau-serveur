package com.moh.restaurant.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/produit")
public class ProduitContoller<Produit> extends CrudController<Produit, Long>{

}
