package com.moh.restaurant.service;


import java.util.List;

import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Produit;


public interface CategoryService extends ICrudService<Category> {

    List<Produit> findProduits(String nameCategory);

}
