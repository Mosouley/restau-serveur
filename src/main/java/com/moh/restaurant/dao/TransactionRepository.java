package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    Transaction findByType(String transactType);
}
