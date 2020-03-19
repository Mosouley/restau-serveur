package com.moh.restaurant.service;

import javax.transaction.Transactional;

import com.moh.restaurant.entities.Invoice;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface InvoiceService extends ICrudService<Invoice> {

    // void addTansactionLine(Long invoiceId,TransactionLine transax);
}
