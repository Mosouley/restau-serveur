package com.moh.restaurant.service;


import com.moh.restaurant.dao.MagasinRepository;
import com.moh.restaurant.entities.Magasin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface MagasinService extends ICrudService<Magasin> {


}
