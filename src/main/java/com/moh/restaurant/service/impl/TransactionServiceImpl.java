package com.moh.restaurant.service.impl;

import com.moh.restaurant.entities.Transaction;
import com.moh.restaurant.service.ICrudService;
import com.moh.restaurant.util.TransactType;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

@Service
// @Primary
@Transactional
public class TransactionMockServiceImpl implements ICrudService<Transaction, Long> {

	private List<Transaction> transactions;

	public TransactionMockServiceImpl(){
		transactions = new ArrayList<Transaction>();
		
		transactions.add(new Transaction(LocalDate.now(),"Description",TransactType.TYPE_IN,160.0f));
		transactions.add(new Transaction(LocalDate.now(),"Description1",TransactType.TYPE_OUT,160.0f));
		transactions.add(new Transaction(LocalDate.now(),"Description2",TransactType.TYPE_DEVIS,150.0f));
	}
	
	
	@Override
	public List<Transaction> getAll() {
		return transactions;
	}

	@Override
	public void add(Transaction transaction) {
		transactions.add(transaction);
	}

	@Override
	public void update(Transaction transaction) {
		transactions.remove(transaction);
		transactions.add(transaction);
	}

	@Override
	public void delete(Long id) {
		Transaction transaction = new Transaction();
		transaction.setId(id);
		transactions.remove(transaction);
	}


	@Override
	public void saveAll(Iterable<Transaction> iterable) {
		Iterator<Transaction> iterator = iterable.iterator();
		if(iterator.hasNext()) {
			transactions.add(iterator.next());
		}
	}

}
