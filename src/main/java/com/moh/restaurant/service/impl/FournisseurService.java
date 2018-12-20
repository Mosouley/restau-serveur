package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.FournisseurRepository;
import com.moh.restaurant.entities.Fournisseur;
import com.moh.restaurant.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.transaction.Transactional;

@Service
// @Primary
@Transactional
public class FournisseurService implements ICrudService<Fournisseur, Long> {

	@Autowired
	private FournisseurRepository fournisseurRepository;
	
	@Override
	public List<Fournisseur> getAll() {
		return fournisseurRepository.findAll();
	}

	@Override
	public void add(Fournisseur fournisseur) {
		fournisseurRepository.save(fournisseur);
	}

	@Override
	public void update(Fournisseur fournisseur) {
		fournisseurRepository.save(fournisseur);
	}

	@Override
	public void delete(Long id) {
		Fournisseur fournisseur = new Fournisseur();
		fournisseur.setId(id);
		fournisseurRepository.delete(fournisseur);
	}
	
	@Override
	public void saveAll(Iterable<Fournisseur> iterable) {
		fournisseurRepository.saveAll(iterable);	
	}

}
