package com.moh.restaurant.service.impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.moh.restaurant.dao.HistoricalProdBalanceRepository;
import com.moh.restaurant.entities.HistoricalProdBalance;
import com.moh.restaurant.service.HistoricalProdBalanceService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class HistoricalProdBalanceServiceImpl implements HistoricalProdBalanceService {

    private final Logger log = LoggerFactory.getLogger(HistoricalProdBalanceService.class);

    private HistoricalProdBalanceRepository historicalProdBalanceRepositlry;

    public HistoricalProdBalanceServiceImpl(HistoricalProdBalanceRepository historicalProdBalanceRepositlry) {
        this.historicalProdBalanceRepositlry = historicalProdBalanceRepositlry;

    }

    @Override
    public List<HistoricalProdBalance> getAll() {
        log.debug("Request to retrieve all the sorties  : { historicalProdBalanceRepositlry.findAll()}");
        return historicalProdBalanceRepositlry.findAll();
    }

    @Override
    public void add(HistoricalProdBalance historicalProdBalance) {
        log.debug("Request to add the HistoricalProdBalance  : { HistoricalProdBalance }");
        historicalProdBalanceRepositlry.save(historicalProdBalance);
    }

    @Override
    public void update(HistoricalProdBalance historicalProdBalance) {
        log.debug("Request to update the HistoricalProdBalance  : { HistoricalProdBalance }");
        historicalProdBalanceRepositlry.save(historicalProdBalance);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the HistoricalProdBalance of id  : { id }");
        historicalProdBalanceRepositlry.deleteById(id);
    }

    public void saveAll(Iterable<HistoricalProdBalance> iterable) {

        log.debug("Request to add an interable of the sorties  : { historicalProdBalanceRepositlry.findAll()}");
        historicalProdBalanceRepositlry.saveAll(iterable);
    }

    @Override
    public Optional<HistoricalProdBalance> get(Long id) {
        return historicalProdBalanceRepositlry.findById(id);
    }
}
