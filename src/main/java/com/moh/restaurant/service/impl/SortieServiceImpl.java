package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.SortieRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Sortie;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.SortieService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class SortieServiceImpl implements SortieService {

    private final Logger log = LoggerFactory.getLogger(SortieService.class);


    private SortieRepository sortieRepository;

    public SortieServiceImpl(SortieRepository sortieRepository){
        this.sortieRepository = sortieRepository;

    }

    @Override
    public List<Sortie> getAll() {
        log.debug("Request to retrieve all the sorties  : { sortieRepository.findAll()}");
        return sortieRepository.findAll();
    }

    @Override
    public void add(Sortie sortie) {
        log.debug("Request to add the sortie  : { sortie }");
        sortieRepository.save(sortie);
    }

    @Override
    public void update(Sortie sortie) {
        log.debug("Request to update the sortie  : { sortie }");
        sortieRepository.save(sortie);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the sortie of id  : { id }");
        sortieRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Sortie> iterable) {

        log.debug("Request to add an interable of the sorties  : { sortieRepository.findAll()}");
        sortieRepository.saveAll(iterable);
    }

    @Override
    public Sortie get(Long id) {
        return null;
    }
}
