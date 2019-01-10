package com.moh.restaurant.service.impl;


import com.moh.restaurant.entities.Client;
import com.moh.restaurant.service.ICrudService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ClientMockServiceImpl implements ICrudService<Client, Long> {

	private List<Client> clients;

	public ClientMockServiceImpl(){
		clients = new ArrayList<Client>();
		
		clients.add(new Client("client 1", "blabal2", "blabla"));
		clients.add(new Client("client 2", "blabal2", "blabla"));
		clients.add(new Client("client 3", "blabal2", "blabla"));
		clients.add(new Client("client 4", "blabal2", "blabla"));
	}
	
	
	@Override
	public List<Client> getAll() {
		return clients;
	}

	@Override
	public void add(Client client) {
		clients.add(client);
	}

	@Override
	public void update(Client client) {
		clients.remove(client);
		clients.add(client);
	}

	@Override
	public void delete(Long id) {
		Client client = new Client();
		client.setId(id);
		clients.remove(client);
	}


	@Override
	public void saveAll(Iterable<Client> iterable) {
		Iterator<Client> iterator = iterable.iterator();
		if(iterator.hasNext()) {
			clients.add(iterator.next());
		}
	}

}
