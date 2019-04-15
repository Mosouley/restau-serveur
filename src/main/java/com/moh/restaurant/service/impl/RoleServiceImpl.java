package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.RoleRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Role;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.RoleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    private final Logger log = LoggerFactory.getLogger(RoleService.class);


    private RoleRepository roleRepository;

    public RoleServiceImpl(RoleRepository roleRepository){
        this.roleRepository = roleRepository;

    }

    @Override
    public List<Role> getAll() {
        log.debug("Request to retrieve all the roles  : { roleRepository.findAll()}");
        return roleRepository.findAll();
    }

    @Override
    public void add(Role role) {
        log.debug("Request to add the role  : { role }");
        roleRepository.save(role);
    }

    @Override
    public void update(Role role) {
        log.debug("Request to update the role  : { role }");
        roleRepository.save(role);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the role of id  : { id }");
        roleRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Role> iterable) {

        log.debug("Request to add an interable of the roles  : { roleRepository.findAll()}");
        roleRepository.saveAll(iterable);
    }

    @Override
    public Role get(Long id) {
        return null;
    }
}
