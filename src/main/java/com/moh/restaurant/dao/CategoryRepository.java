package com.moh.restaurant.dao;


import java.util.List;

import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Produit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
/*
    *Find a category given its name
    *category
    *
    */
    Category findByNameCategory(String nameCategory);

    /*
    *Find the list of products that have the same
    *category
    *
    */
    @Query("SELECT p FROM Produit p WHERE LOWER(p.category.nameCategory) like LOWER(:nameCategory)")
    List<Produit> findProduits(@Param("nameCategory") String nameCategory);
}
