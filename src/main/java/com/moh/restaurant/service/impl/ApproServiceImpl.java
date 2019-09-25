package com.moh.restaurant.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.moh.restaurant.dao.ApproRepository;
import com.moh.restaurant.entities.Appro;
import com.moh.restaurant.service.ApproService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ApproServiceImpl implements ApproService {

    private final Logger log = LoggerFactory.getLogger(ApproService.class);

    private ApproRepository approRepositlry;

    public ApproServiceImpl(ApproRepository approRepositlry) {
        this.approRepositlry = approRepositlry;

    }

    @Override
    public List<Appro> getAll() {
        log.debug("Request to retrieve all the sorties  : { approRepositlry.findAll()}");
        return approRepositlry.findAll();
    }

    @Override
    public void add(Appro appro) {
        log.debug("Request to add the Appro  : { Appro }");
        approRepositlry.save(appro);
    }

    @Override
    public void update(Appro appro) {
        log.debug("Request to update the Appro  : { Appro }");
        approRepositlry.save(appro);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the Appro of id  : { id }");
        approRepositlry.deleteById(id);
    }

    public void saveAll(Iterable<Appro> iterable) {

        log.debug("Request to add an interable of the sorties  : { approRepositlry.findAll()}");
        approRepositlry.saveAll(iterable);
    }

    @Override
    public Optional<Appro> get(Long id) {
        return approRepositlry.findById(id);
    }
}
