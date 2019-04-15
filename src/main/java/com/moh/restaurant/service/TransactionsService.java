package com.moh.restaurant.service;


import com.moh.restaurant.dao.TransactionsRepository;
import com.moh.restaurant.entities.Transactions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface TransactionsService extends ICrudService<Transactions> {


}
