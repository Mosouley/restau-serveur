package com.moh.restaurant.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.moh.restaurant.util.TransactType;

@Entity
public class Transaction{


    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
    
    private String transactDesc;
	private TransactType transactType;
	
	private LocalDate transDate;
	
	private float transactAmount;


    public Transaction(){
        super();
    }
    /**
     * @return the transactDesc
     */
    public String getTransactDesc() {
        return transactDesc;
    }

    /**
     * @return the transactAmount
     */
    public float getTransactAmount() {
        return transactAmount;
    }

    /**
     * @param transactAmount the transactAmount to set
     */
    public void setTransactAmount(float transactAmount) {
        this.transactAmount = transactAmount;
    }

    /**
     * @return the transDate
     */
    public LocalDate getTransDate() {
        return transDate;
    }

    /**
     * @param transDate the transDate to set
     */
    public void setTransDate(LocalDate transDate) {
        this.transDate = transDate;
    }

    /**
     * @return the transactType
     */
    public TransactType getTransactType() {
        return transactType;
    }

    /**
     * @param transactType the transactType to set
     */
    public void setTransactType(TransactType transactType) {
        this.transactType = transactType;
    }

    /**
     * @param transactDesc the transactDesc to set
     */
    public void setTransactDesc(String transactDesc) {
        this.transactDesc = transactDesc;
    }
}