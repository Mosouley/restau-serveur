package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.CategoryRepository;
import com.moh.restaurant.entities.Category;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    private final Logger log = LoggerFactory.getLogger(CategoryService.class);


    private CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;

    }

    @Override
    public Iterable<Category> getAll() {
        log.debug("Request to retrieve all the category  : { categoryRepository.findAll()}");
        return categoryRepository.findAll();
    }
    @Override
    public List<Produit> findProduits(String nameCategory) {
        log.debug("Request to retrieve all products of a category  : { categoryRepository.findAll()}");
        return categoryRepository.findProduits(nameCategory);
    }
    @Override
    public void add(Category category) {
        log.debug("Request to add the category  : { category }");
        categoryRepository.save(category);
    }

    @Override
    public void update(Category category) {
        log.debug("Request to update the category  : { category }");
        categoryRepository.save(category);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the category of id  : { id }");
        Optional<Category>  foundCategory=categoryRepository.findById(id);
       if(!categoryRepository.findProduits(foundCategory.get().getNameCategory()).isEmpty()){
           categoryRepository.deleteById(id);
       }else{
        log.debug("Request to delete can not be performed , this entity is not empty: { foundCategory.getProduits() }");
       }
        

    }

    public void saveAll(Iterable<Category> iterable) {

        log.debug("Request to add an interable of the categorys  : { categoryRepository.findAll()}");
        categoryRepository.saveAll(iterable);
    }

    public Optional<Category> findById(Long id){
        return categoryRepository.findById(id);
    }

    @Override
    public Optional<Category> get(Long id) {
        return categoryRepository.findById(id);
    }


}
