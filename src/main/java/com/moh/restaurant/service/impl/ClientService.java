package com.moh.restaurant.service.impl;



import com.moh.restaurant.dao.ClientRepository;
import com.moh.restaurant.entities.Client;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import javax.transaction.Transactional;

@Service
// @Primary
@Transactional
public class ClientService implements ICrudService<Client, Long> {

	private final Logger log = LoggerFactory.getLogger(ClientService.class);
 	@Autowired
	private ClientRepository clientRepository;
	
	@Override
	public List<Client> getAll() {
		log.debug("Request to save Issuer : {products}");
		return clientRepository.findAll();
	}

	@Override
	public void add(Client client) {
		clientRepository.save(client);
	}

	@Override
	public void update(Client client) {
		clientRepository.save(client);
	}

	@Override
	public void delete(Long id) {
		Client client = new Client();
		client.setId(id);
		clientRepository.delete(client);
	}
	
	@Override
	public void saveAll(Iterable<Client> iterable) {
		clientRepository.saveAll(iterable);	
	}

}
