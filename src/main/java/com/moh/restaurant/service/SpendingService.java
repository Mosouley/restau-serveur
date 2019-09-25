package com.moh.restaurant.service;

import javax.transaction.Transactional;

import com.moh.restaurant.entities.Spending;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface SpendingService extends ICrudService<Spending> {

    // void addTansactionLine(Long invoiceId,TransactionLine transax);
}
