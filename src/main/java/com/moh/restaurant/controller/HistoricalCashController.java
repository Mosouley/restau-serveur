package com.moh.restaurant.controller;

import com.moh.restaurant.entities.HistoricalCash;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/cash")
//@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
public class HistoricalCashController extends CrudController<HistoricalCash> {

}
