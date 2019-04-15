package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Magasin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/magasin")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class MagasinController extends CrudController<Magasin> {

}
