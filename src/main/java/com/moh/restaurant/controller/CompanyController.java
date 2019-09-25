package com.moh.restaurant.controller;
import com.moh.restaurant.entities.Company;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/company")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class CompanyController extends CrudController<Company> {

}
