package com.moh.restaurant.dao;


import com.moh.restaurant.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    Produit findByCodeProd(String codeProd);
    
    @Query("SELECT p FROM Produit p WHERE LOWER(p.category.nameCategory) like LOWER(:nameCategory)")
    Iterable<Produit> findProduitsByCategory(@Param("nameCategory") String nameCategory);
}
