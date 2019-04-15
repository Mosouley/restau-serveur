package com.moh.restaurant.service;


import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Produit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


public interface CategoryService extends ICrudService<Category> {

    List<Produit> findProduits(String nameCategory);

}
