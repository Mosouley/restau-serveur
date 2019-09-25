package com.moh.restaurant.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.moh.restaurant.util.PaymentMode;

@Entity
public class HistoricalCash{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateHisto;
    private PaymentMode payMode ;
    private float balance;


    
    public HistoricalCash(){

    };
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
   /**
    * @return the payMode
    */
   public PaymentMode getPayMode() {
       return payMode;
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
    * @param payMode the payMode to set
    */
   public void setPayMode(PaymentMode payMode) {
       this.payMode = payMode;
   }
    /**
     * @param dateHisto the dateHisto to set
     */
    public void setDateHisto(LocalDate dateHisto) {
        this.dateHisto = dateHisto;
    }
}