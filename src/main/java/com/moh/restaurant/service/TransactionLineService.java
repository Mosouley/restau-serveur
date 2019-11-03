package com.moh.restaurant.service;


import javax.transaction.Transactional;

import com.moh.restaurant.entities.TransactionLine;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface TransactionLineService extends ICrudService<TransactionLine> {

}
