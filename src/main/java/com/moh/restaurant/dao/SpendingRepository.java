package com.moh.restaurant.dao;

import com.moh.restaurant.entities.Spending;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpendingRepository extends JpaRepository<Spending, Long> {

  
}
