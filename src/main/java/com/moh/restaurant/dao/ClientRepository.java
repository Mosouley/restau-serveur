package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Client;
import com.moh.restaurant.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findByName(String name);
}
