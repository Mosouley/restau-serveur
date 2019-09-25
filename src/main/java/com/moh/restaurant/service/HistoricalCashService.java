package com.moh.restaurant.service;

import javax.transaction.Transactional;

import com.moh.restaurant.entities.HistoricalCash;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface HistoricalCashService extends ICrudService<HistoricalCash> {

}
