package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.dao.TransactionLineRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.TransactionLine;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.TransactionLineService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TransactionLineServiceImpl implements TransactionLineService {

    private final Logger log = LoggerFactory.getLogger(TransactionLineService.class);


    private TransactionLineRepository transactionLineRepository;

    public TransactionLineServiceImpl(TransactionLineRepository transactionLineRepository){
        this.transactionLineRepository = transactionLineRepository;

    }

    @Override
    public List<TransactionLine> getAll() {
        log.debug("Request to retrieve all the transactionLine  : { transactionLineRepository.findAll()}");
        return transactionLineRepository.findAll();
    }

    @Override
    public void add(TransactionLine transactionLine) {
        log.debug("Request to add the product  : { transactionLine }");
        transactionLineRepository.save(transactionLine);
    }

    @Override
    public void update(TransactionLine transactionLine) {
        log.debug("Request to update the product  : { transactionLine }");
        transactionLineRepository.save(transactionLine);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the product of id  : { id }");
        transactionLineRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<TransactionLine> iterable) {

        log.debug("Request to add an interable of the transactionLine  : { transactionLineRepository.findAll()}");
        transactionLineRepository.saveAll(iterable);
    }

    @Override
    public TransactionLine get(Long id) {
        return null;
    }
}
