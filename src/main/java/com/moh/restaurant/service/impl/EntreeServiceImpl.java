package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.EntreeRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Entree;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.EntreeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EntreeServiceImpl implements EntreeService {

    private final Logger log = LoggerFactory.getLogger(EntreeService.class);


    private EntreeRepository entreeRepository;

    public EntreeServiceImpl(EntreeRepository entreeRepository){
        this.entreeRepository = entreeRepository;

    }

    @Override
    public List<Entree> getAll() {
        log.debug("Request to retrieve all the entrees  : { entreeRepository.findAll()}");
        return entreeRepository.findAll();
    }

    @Override
    public void add(Entree entree) {
        log.debug("Request to add the entree  : { entree }");
        entreeRepository.save(entree);
    }

    @Override
    public void update(Entree entree) {
        log.debug("Request to update the entree  : { entree }");
        entreeRepository.save(entree);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the entree of id  : { id }");
        entreeRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Entree> iterable) {

        log.debug("Request to add an interable of the entrees  : { entreeRepository.findAll()}");
        entreeRepository.saveAll(iterable);
    }

    @Override
    public Entree get(Long id) {
        return null;
    }

}
