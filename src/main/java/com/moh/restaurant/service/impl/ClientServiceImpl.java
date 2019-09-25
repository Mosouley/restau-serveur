package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.ClientRepository;
import com.moh.restaurant.entities.Client;
import com.moh.restaurant.service.ClientService;
import com.moh.restaurant.service.ICrudService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ClientServiceImpl implements ClientService{

    private final Logger log = LoggerFactory.getLogger(ClientService.class);


    private ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository){
        this.clientRepository = clientRepository;

    }

    @Override
    public List<Client> getAll() {
        log.debug("Request to retrieve all the client  : { clientRepository.findAll()}");
        return clientRepository.findAll();
    }

    @Override
    public void add(Client client) {
        log.debug("Request to add the client  : { client }");
        clientRepository.save(client);
    }

    @Override
    public void update(Client client) {
        log.debug("Request to update the client  : { client }");
        clientRepository.save(client);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the client of id  : { id }");
        clientRepository.deleteById(id);
    }


    public void saveAll(Iterable<Client> iterable) {

        log.debug("Request to add an interable of the client  : { clientRepository.findAll()}");
        clientRepository.saveAll(iterable);
    }

    @Override
    public Optional<Client> get(Long id) {
        return clientRepository.findById(id);
    }

}
