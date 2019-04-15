package com.moh.restaurant.controller;

import com.moh.restaurant.entities.TransactionLine;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/transactionLine")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class TransactionLineController extends CrudController<TransactionLine> {

}
