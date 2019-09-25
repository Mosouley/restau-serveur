package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.SpendingRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Spending;
import com.moh.restaurant.entities.Spending;
import com.moh.restaurant.entities.TransactionLine;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.InvoiceService;
import com.moh.restaurant.service.SpendingService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SpendingServiceImpl implements SpendingService {

    private final Logger log = LoggerFactory.getLogger(SpendingService.class);


    private SpendingRepository spendingRepository;

    public SpendingServiceImpl(SpendingRepository spendingRepository){
        this.spendingRepository = spendingRepository;

    }

    @Override
    public List<Spending> getAll() {
        log.debug("Request to retrieve all the Spending  : { SpendingRepository.findAll()}");
        return spendingRepository.findAll();
    }

    @Override
    public void add(Spending Spending) {
        log.debug("Request to add the spending  : { Spending }");
        spendingRepository.save(Spending);
    }

    @Override
    public void update(Spending Spending) {
        log.debug("Request to update the spending  : { Spending }");
        spendingRepository.save(Spending);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the spending of id  : { id }");
        spendingRepository.deleteById(id);
    }


    public void saveAll(Iterable<Spending> iterable) {

        log.debug("Request to add an interable of the Spending  : { SpendingRepository.findAll()}");
        spendingRepository.saveAll(iterable);
    }

    @Override
    public Optional<Spending> get(Long id) {
        return spendingRepository.findById(id);
    }

    // @Override
    // public void addTansactionLine(Long invoiceId,TransactionLine transax) {
    //     // transax.setInvoice(Spending);
    //  Spending Spending= spendingRepository.findById(invoiceId).get();      
    //  transax.setInvoice(Spending);
    
	// }

}
