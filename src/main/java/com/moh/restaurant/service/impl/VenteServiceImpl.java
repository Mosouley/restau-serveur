package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.VenteRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Vente;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.VenteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class VenteServiceImpl implements VenteService{

    private final Logger log = LoggerFactory.getLogger(VenteService.class);


    private VenteRepository venteRepository;

    public VenteServiceImpl(VenteRepository venteRepository){
        this.venteRepository = venteRepository;

    }

    @Override
    public List<Vente> getAll() {
        log.debug("Request to retrieve all the ventes  : { venteRepository.findAll()}");
        return venteRepository.findAll();
    }

    @Override
    public void add(Vente vente) {
        log.debug("Request to add the vente  : { vente }");
        venteRepository.save(vente);
    }

    @Override
    public void update(Vente vente) {
        log.debug("Request to update the vente  : { vente }");
        venteRepository.save(vente);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the vente of id  : { id }");
        venteRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Vente> iterable) {

        log.debug("Request to add an interable of the ventes  : { venteRepository.findAll()}");
        venteRepository.saveAll(iterable);
    }

    @Override
    public Vente get(Long id) {
        return null;
    }

}
