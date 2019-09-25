package com.moh.restaurant.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import com.moh.restaurant.dao.HistoricalCashRepository;
import com.moh.restaurant.entities.HistoricalCash;
import com.moh.restaurant.service.HistoricalCashService;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class HistoricalCashServiceImpl implements HistoricalCashService {

    private final Logger log = LoggerFactory.getLogger(HistoricalCashService.class);

    private HistoricalCashRepository historicalCashRepository;

    public HistoricalCashServiceImpl(HistoricalCashRepository historicalCashRepository) {
        this.historicalCashRepository = historicalCashRepository;

    }

    @Override
    public List<HistoricalCash> getAll() {
        log.debug("Request to retrieve all the sorties  : { historicalCashRepository.findAll()}");
        return historicalCashRepository.findAll();
    }

    @Override
    public void add(HistoricalCash historicalCash) {
        log.debug("Request to add the HistoricalCash  : { HistoricalCash }");
        historicalCashRepository.save(historicalCash);
    }

    @Override
    public void update(HistoricalCash historicalCash) {
        log.debug("Request to update the HistoricalCash  : { HistoricalCash }");
        historicalCashRepository.save(historicalCash);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the HistoricalCash of id  : { id }");
        historicalCashRepository.deleteById(id);
    }

    public void saveAll(Iterable<HistoricalCash> iterable) {

        log.debug("Request to add an interable of the sorties  : { historicalCashRepository.findAll()}");
        historicalCashRepository.saveAll(iterable);
    }

    @Override
    public Optional<HistoricalCash> get(Long id) {
        return historicalCashRepository.findById(id);
    }
}
