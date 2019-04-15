package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    Produit findByCodeProd(String codeProd);
}
