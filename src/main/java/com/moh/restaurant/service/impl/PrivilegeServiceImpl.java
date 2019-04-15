package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.PrivilegeRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Privilege;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.PrivilegeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PrivilegeServiceImpl implements PrivilegeService {

    private final Logger log = LoggerFactory.getLogger(PrivilegeService.class);


    private PrivilegeRepository privilegeRepository;

    public PrivilegeServiceImpl(PrivilegeRepository privilegeRepository){
        this.privilegeRepository = privilegeRepository;

    }

    @Override
    public List<Privilege> getAll() {
        log.debug("Request to retrieve all the privileges  : { privilegeRepository.findAll()}");
        return privilegeRepository.findAll();
    }

    @Override
    public void add(Privilege privilege) {
        log.debug("Request to add the privilege  : { privilege }");
        privilegeRepository.save(privilege);
    }

    @Override
    public void update(Privilege privilege) {
        log.debug("Request to update the privilege  : { privilege }");
        privilegeRepository.save(privilege);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the privilege of id  : { id }");
        privilegeRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Privilege> iterable) {

        log.debug("Request to add an interable of the privileges  : { privilegeRepository.findAll()}");
        privilegeRepository.saveAll(iterable);
    }

    @Override
    public Privilege get(Long id) {
        return null;
    }

}
