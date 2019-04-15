package com.moh.restaurant.controller;

import com.moh.restaurant.entities.Transactions;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/transactions")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class TransactionsController extends CrudController<Transactions> {

}
