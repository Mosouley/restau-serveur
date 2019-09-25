package com.moh.restaurant.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HistoricalProdBalance{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    private LocalDate dateHisto;
    private String codeProd ;
    private float balance;


    
    public HistoricalProdBalance(){

    };
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
    /**
     * @return the codeProd
     */
    public String getCodeProd() {
        return codeProd;
    }
    /**
     * @return the balance
     */
    public float getBalance() {
        return balance;
    }
    /**
     * @return the dateHisto
     */
    public LocalDate getDateHisto() {
        return dateHisto;
    }
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    /**
     * @param balance the balance to set
     */
    public void setBalance(float balance) {
        this.balance = balance;
    }
    /**
     * @param codeProd the codeProd to set
     */
    public void setCodeProd(String codeProd) {
        this.codeProd = codeProd;
    }
    /**
     * @param dateHisto the dateHisto to set
     */
    public void setDateHisto(LocalDate dateHisto) {
        this.dateHisto = dateHisto;
    }
}