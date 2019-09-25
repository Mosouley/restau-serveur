package com.moh.restaurant.dao;

import com.moh.restaurant.entities.HistoricalProdBalance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricalProdBalanceRepository extends JpaRepository<HistoricalProdBalance, Long> {

}
