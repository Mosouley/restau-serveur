package com.moh.restaurant.service.impl;


import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.moh.restaurant.dao.ProduitRepository;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.ProduitService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {

  private final Logger log = LoggerFactory.getLogger(ProduitService.class);

  private ProduitRepository produitRepository;

  public ProduitServiceImpl(ProduitRepository produitRepository) {
    this.produitRepository = produitRepository;

    }

    public Iterable<Produit> getProduitsByCategry(String nameCategory) {
        log.debug("Request to retrieve all the products per category : { findProduitsByCategory(nameCategory)}");
        return produitRepository.findProduitsByCategory(nameCategory);
    }

    @Override
    public List<Produit> getAll() {
        log.debug("Request to retrieve all the products  : { produitRepository.findAll()}");
        return produitRepository.findAll();
    }

    @Override
    public void add(Produit produit) {
        log.debug("Request to add the product  : { produit }");

        produitRepository.save(produit);
    }

    @Override
    public void update(Produit produit) {
        log.debug("Request to update the product  : { produit }");
        produitRepository.save(produit);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the product of id  : { id }");
        produitRepository.deleteById(id);
    }

    public void saveAll(Iterable<Produit> iterable) {

        log.debug("Request to add an interable of the products  : { produitRepository.findAll()}");
        produitRepository.saveAll(iterable);
    }

    @Override
    public Optional<Produit> get(Long id) {
        return produitRepository.findById(id);
    }

}
