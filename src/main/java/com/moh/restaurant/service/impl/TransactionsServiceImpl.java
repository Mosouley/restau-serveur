package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.TransactionsRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Transactions;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.TransactionsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TransactionsServiceImpl implements TransactionsService {

    private final Logger log = LoggerFactory.getLogger(TransactionsService.class);


    private TransactionsRepository transactionsRepository;

    public TransactionsServiceImpl(TransactionsRepository transactionsRepository){
        this.transactionsRepository = transactionsRepository;

    }

    @Override
    public List<Transactions> getAll() {
        log.debug("Request to retrieve all the transactions  : { transactionsRepository.findAll()}");
        return transactionsRepository.findAll();
    }

    @Override
    public void add(Transactions transactions) {
        log.debug("Request to add the product  : { transactions }");
        transactionsRepository.save(transactions);
    }

    @Override
    public void update(Transactions transactions) {
        log.debug("Request to update the product  : { transactions }");
        transactionsRepository.save(transactions);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the product of id  : { id }");
        transactionsRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<Transactions> iterable) {

        log.debug("Request to add an interable of the transactions  : { transactionsRepository.findAll()}");
        transactionsRepository.saveAll(iterable);
    }

    @Override
    public Transactions get(Long id) {
        return null;
    }

}
