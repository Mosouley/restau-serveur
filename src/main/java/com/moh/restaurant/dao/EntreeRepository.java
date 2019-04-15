package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Client;
import com.moh.restaurant.entities.Entree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntreeRepository extends JpaRepository<Entree, Long> {

}
