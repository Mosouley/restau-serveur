package com.moh.restaurant.controller;

import java.util.List;

import javax.validation.Valid;

import com.moh.restaurant.dao.ProduitRepository;
import com.moh.restaurant.entities.Produit;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/produit")
// @CrossOrigin(origins = "*", maxAge=3600)
public class ProduitController extends CrudController<Produit> {

    private ProduitRepository produitRepository;
    public ProduitController(ProduitRepository produitRepository){
        this.produitRepository = produitRepository;
    }
    @GetMapping ("/by/{nameCategory}")
    public Iterable<Produit> getProduitByCategory(@PathVariable String nameCategory){
        if(!(nameCategory == null)){
            return produitRepository.findProduitsByCategory(nameCategory) ;
        }else{
            return null;
        }
    }
    @PostMapping("/all")
	public ResponseEntity<List<Produit>> addAll(@Valid @RequestBody List<Produit> list) {
		produitRepository.saveAll(list);
		return new ResponseEntity<>(list, HttpStatus.ACCEPTED);
	}
}
