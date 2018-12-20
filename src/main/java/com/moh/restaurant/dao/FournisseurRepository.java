package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Fournisseur;
import com.moh.restaurant.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {

    Fournisseur findByNameSupplier(String nameSupplier);
}
