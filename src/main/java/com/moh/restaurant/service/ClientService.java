package com.moh.restaurant.service;


import com.moh.restaurant.dao.ClientRepository;
import com.moh.restaurant.entities.Client;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


public interface ClientService extends ICrudService<Client> {



}
