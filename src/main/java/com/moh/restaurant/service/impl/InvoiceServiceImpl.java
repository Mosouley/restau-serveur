package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.InvoiceRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Invoice;
import com.moh.restaurant.entities.TransactionLine;
import com.moh.restaurant.service.CategoryService;
import com.moh.restaurant.service.InvoiceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class InvoiceServiceImpl implements InvoiceService {

    private final Logger log = LoggerFactory.getLogger(InvoiceService.class);


    private InvoiceRepository invoiceRepository;

    public InvoiceServiceImpl(InvoiceRepository invoiceRepository){
        this.invoiceRepository = invoiceRepository;

    }

    @Override
    public List<Invoice> getAll() {
        log.debug("Request to retrieve all the Invoice  : { InvoiceRepository.findAll()}");
        return invoiceRepository.findAll();
    }

    @Override
    public void add(Invoice invoice) {
        log.debug("Request to add the product  : { Invoice }");
        invoiceRepository.save(invoice);
    }

    @Override
    public void update(Invoice invoice) {
        log.debug("Request to update the product  : { Invoice }");
        invoiceRepository.save(invoice);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the product of id  : { id }");
        invoiceRepository.deleteById(id);
    }


    public void saveAll(Iterable<Invoice> iterable) {

        log.debug("Request to add an interable of the Invoice  : { InvoiceRepository.findAll()}");
        invoiceRepository.saveAll(iterable);
    }

    @Override
    public Optional<Invoice> get(Long id) {
        return invoiceRepository.findById(id);
    }

    // @Override
    // public void addTansactionLine(Long invoiceId,TransactionLine transax) {
    //     // transax.setInvoice(invoice);
    //  Invoice invoice= invoiceRepository.findById(invoiceId).get();      
    //  transax.setInvoice(invoice);
    
	// }

}
