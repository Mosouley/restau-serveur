package com.moh.restaurant.controller;


import com.moh.restaurant.entities.HistoricalProdBalance;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/prodBalance")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class HistoricalProdBalanceController extends CrudController<HistoricalProdBalance> {

}
