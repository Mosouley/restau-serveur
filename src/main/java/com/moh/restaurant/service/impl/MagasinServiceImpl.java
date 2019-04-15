package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.MagasinRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Magasin;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.MagasinService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MagasinServiceImpl implements MagasinService {

    private final Logger log = LoggerFactory.getLogger(MagasinService.class);


    private MagasinRepository magasinRepository;

    public MagasinServiceImpl(MagasinRepository magasinRepository){
        this.magasinRepository = magasinRepository;

    }

    @Override
    public List<Magasin> getAll() {
        log.debug("Request to retrieve all the magasins  : { magasinRepository.findAll()}");
        return magasinRepository.findAll();
    }

    @Override
    public void add(Magasin magasin) {
        log.debug("Request to add the magasin  : { magasin }");
        magasinRepository.save(magasin);
    }

    @Override
    public void update(Magasin magasin) {
        log.debug("Request to update the magasin  : { magasin }");
        magasinRepository.save(magasin);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the magasin of id  : { id }");
        magasinRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Magasin> iterable) {

        log.debug("Request to add an interable of the magasins  : { magasinRepository.findAll()}");
        magasinRepository.saveAll(iterable);
    }

    @Override
    public Magasin get(Long id) {
        return null;
    }

}
