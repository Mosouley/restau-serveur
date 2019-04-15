package com.moh.restaurant.service;


import com.moh.restaurant.dao.ProduitRepository;
import com.moh.restaurant.entities.Produit;
import com.moh.restaurant.service.ICrudService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

import javax.transaction.Transactional;

public interface ProduitService extends ICrudService<Produit> {



}
