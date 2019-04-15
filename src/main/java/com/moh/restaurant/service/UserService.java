package com.moh.restaurant.service;


import com.moh.restaurant.dao.ProduitRepository;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.ICrudService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProduitService implements ICrudService<Produit, Long> {

	private final Logger log = LoggerFactory.getLogger(ProduitService.class);


	private ProduitRepository produitRepository;

	public  ProduitService(ProduitRepository produitRepository){
		this.produitRepository = produitRepository;

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

	@Override
	public void saveAll(Iterable<Produit> iterable) {

		log.debug("Request to add an interable of the products  : { produitRepository.findAll()}");
		produitRepository.saveAll(iterable);
	}

}
