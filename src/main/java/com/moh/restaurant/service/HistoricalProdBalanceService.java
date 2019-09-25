package com.moh.restaurant.service;

import javax.transaction.Transactional;

import com.moh.restaurant.entities.HistoricalProdBalance;

import org.springframework.stereotype.Service;

@Service
@Transactional
public interface HistoricalProdBalanceService extends ICrudService<HistoricalProdBalance> {

}
