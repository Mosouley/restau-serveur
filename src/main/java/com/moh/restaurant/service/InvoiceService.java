package com.moh.restaurant.service;

import com.moh.restaurant.dao.InvoiceRepository;
import com.moh.restaurant.entities.Invoice;
import com.moh.restaurant.entities.TransactionLine;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public interface InvoiceService extends ICrudService<Invoice> {

    // void addTansactionLine(Long invoiceId,TransactionLine transax);
}
