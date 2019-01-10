package com.moh.restaurant.service.impl;


import com.moh.restaurant.entities.Fournisseur;
import com.moh.restaurant.service.ICrudService;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

@Service
// @Primary
@Transactional
public class FournisseurServiceImpl implements ICrudService<Fournisseur, Long> {

	private List<Fournisseur> fournisseurs;

	public FournisseurServiceImpl(){
//		fournisseurs = new ArrayList<Fournisseur>();
//
//		fournisseurs.add(new Fournisseur("Fournisseur 1", "blabal2", "blabla"));
//		fournisseurs.add(new Fournisseur("Fournisseur 2", "blabal2", "blabla"));
//		fournisseurs.add(new Fournisseur("Fournisseur 3", "blabal2", "blabla"));
//		fournisseurs.add(new Fournisseur("Fournisseur 4", "blabal2", "blabla"));
	}
	
	
	@Override
	public List<Fournisseur> getAll() {
		return fournisseurs;
	}

	@Override
	public void add(Fournisseur Fournisseur) {
		fournisseurs.add(Fournisseur);
	}

	@Override
	public void update(Fournisseur Fournisseur) {
		fournisseurs.remove(Fournisseur);
		fournisseurs.add(Fournisseur);
	}

	@Override
	public void delete(Long id) {
		Fournisseur fournisseur = new Fournisseur();
		fournisseur.setId(id);
		fournisseurs.remove(fournisseur);
	}


	@Override
	public void saveAll(Iterable<Fournisseur> iterable) {
		Iterator<Fournisseur> iterator = iterable.iterator();
		if(iterator.hasNext()) {
			fournisseurs.add(iterator.next());
		}
	}

}
