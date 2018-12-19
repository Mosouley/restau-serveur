package com.moh.restaurant.service.impl;


import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.ICrudService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ProduitMockServiceImpl implements ICrudService<Produit, Long> {

	private List<Produit> produits;
	
	public ProduitMockServiceImpl(){
		produits = new ArrayList<Produit>();
		
		produits.add(new Produit("Beaufort", 20,100.5f,150.5f));
		produits.add(new Produit("Beaufort", 20,100.0f,160.0f));
	}
	
	
	@Override
	public List<Produit> getAll() {
		return produits;
	}

	@Override
	public void add(Produit produit) {
		produits.add(produit);
	}

	@Override
	public void update(Produit produit) {
		produits.remove(produit);
		produits.add(produit);
	}

	@Override
	public void delete(Long id) {
		Produit produit = new Produit();
		produit.setId(id);
		produits.remove(produit);
	}


	@Override
	public void saveAll(Iterable<Produit> iterable) {
		Iterator<Produit> iterator = iterable.iterator();
		if(iterator.hasNext()) {
			produits.add(iterator.next());
		}
	}

}
