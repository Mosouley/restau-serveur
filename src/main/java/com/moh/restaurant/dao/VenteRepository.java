package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Client;
import com.moh.restaurant.entities.Vente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenteRepository extends JpaRepository<Vente, Long> {

}
