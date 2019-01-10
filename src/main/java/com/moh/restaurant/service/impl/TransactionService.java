package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.TransactionRepository;
import com.moh.restaurant.entities.Transaction;
import com.moh.restaurant.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.transaction.Transactional;

@Service
// @Primary
@Transactional
public class TransactionService implements ICrudService<Transaction, Long> {

	@Autowired
	private TransactionRepository transactionRepository;
	
	@Override
	public List<Transaction> getAll() {
		return transactionRepository.findAll();
	}

	@Override
	public void add(Transaction transaction) {
		transactionRepository.save(transaction);
	}

	@Override
	public void update(Transaction transaction) {
		transactionRepository.save(transaction);
	}

	@Override
	public void delete(Long id) {
		transactionRepository.deleteById(id);
	}
	
	@Override
	public void saveAll(Iterable<Transaction> iterable) {
		transactionRepository.saveAll(iterable);	
	}

}
