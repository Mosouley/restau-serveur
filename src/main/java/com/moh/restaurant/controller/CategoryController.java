package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Category;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/category")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class CategoryController extends CrudController<Category> {

}
