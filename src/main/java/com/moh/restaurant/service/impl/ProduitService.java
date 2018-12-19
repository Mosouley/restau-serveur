package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.ProduitRepository;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
public class ProduitService implements ICrudService<Produit, Long> {

	@Autowired
	private ProduitRepository produitRepository;
	
	@Override
	public List<Produit> getAll() {
		return produitRepository.findAll();
	}

	@Override
	public void add(Produit produit) {
		produitRepository.save(produit);
	}

	@Override
	public void update(Produit produit) {
		produitRepository.save(produit);
	}

	@Override
	public void delete(Long id) {
		Produit produit = new Produit();
		produit.setId(id);
		produitRepository.delete(produit);
	}
	
	@Override
	public void saveAll(Iterable<Produit> iterable) {
		produitRepository.saveAll(iterable);	
	}

}
