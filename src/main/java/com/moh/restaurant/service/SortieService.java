package com.moh.restaurant.service;


import com.moh.restaurant.dao.SortieRepository;
import com.moh.restaurant.entities.Sortie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface SortieService extends ICrudService<Sortie> {



}
