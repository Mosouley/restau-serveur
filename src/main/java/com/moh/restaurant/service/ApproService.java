package com.moh.restaurant.service;

import javax.transaction.Transactional;

import com.moh.restaurant.entities.Appro;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface ApproService extends ICrudService<Appro> {

}
