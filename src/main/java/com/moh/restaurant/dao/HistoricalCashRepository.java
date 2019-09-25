package com.moh.restaurant.dao;

import com.moh.restaurant.entities.HistoricalCash;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricalCashRepository extends JpaRepository<HistoricalCash, Long> {

}
