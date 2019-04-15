package com.moh.restaurant.service;


import com.moh.restaurant.dao.EntreeRepository;
import com.moh.restaurant.entities.Entree;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface EntreeService extends ICrudService<Entree> {


}
