package com.moh.restaurant.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.moh.restaurant.dao.CompanyRepository;
import com.moh.restaurant.entities.Company;
import com.moh.restaurant.service.CompanyService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CompanyServiceImpl implements CompanyService {

    private final Logger log = LoggerFactory.getLogger(CompanyService.class);


    private CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository){
        this.companyRepository = companyRepository;

    }

    @Override
    public List<Company> getAll() {
        log.debug("Request to retrieve all the companys  : { companyRepository.findAll()}");
        return companyRepository.findAll();
    }

    @Override
    public void add(Company company) {
        log.debug("Request to add the company  : { company }");
       if(companyRepository.findAll().isEmpty()) {
           companyRepository.save(company);
       } 
    }

    @Override
    public void update(Company company) {
        log.debug("Request to update the company  : { company }");
        companyRepository.save(company);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the company of id  : { id }");
        companyRepository.deleteById(id);
    }


    @Override
    public Optional<Company> get(Long id) {
        return companyRepository.findById(id);
    }

}
