package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    Client findByNameClient(String nameClient);
    Client findByCodeIfuClient(String codeIfuClient);
}
