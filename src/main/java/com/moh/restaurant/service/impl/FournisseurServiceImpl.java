package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.FournisseurRepository;
import com.moh.restaurant.entities.Fournisseur;
import com.moh.restaurant.service.FournisseurService;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class FournisseurServiceImpl implements FournisseurService {

    private final Logger log = LoggerFactory.getLogger(FournisseurService.class);


    private FournisseurRepository fournisseurRepository;

    public FournisseurServiceImpl(FournisseurRepository fournisseurRepository){
        this.fournisseurRepository = fournisseurRepository;

    }

    @Override
    public List<Fournisseur> getAll() {
        log.debug("Request to retrieve all the fournisseurs  : { fournisseurRepository.findAll()}");
        return fournisseurRepository.findAll();
    }

    @Override
    public void add(Fournisseur fournisseur) {
        log.debug("Request to add the fournisseur  : { fournisseur }");
        fournisseurRepository.save(fournisseur);
    }

    @Override
    public void update(Fournisseur fournisseur) {
        log.debug("Request to update the fournisseur  : { fournisseur }");
        fournisseurRepository.save(fournisseur);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the fournisseur of id  : { id }");
        fournisseurRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Fournisseur> iterable) {

        log.debug("Request to add an interable of the fournisseurs  : { fournisseurRepository.findAll()}");
        fournisseurRepository.saveAll(iterable);
    }

    @Override
    public Fournisseur get(Long id) {
        return null;
    }


}
