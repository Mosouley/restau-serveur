package com.moh.restaurant.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.*;

import com.moh.restaurant.util.TransactType;

@Entity
public class Transaction{


    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

    private String codeTransaction;

    private String transactDesc;

	private TransactType transactType;


	private LocalDate transDate;

	private float transactAmount;

	@ManyToMany
	private List<Produit> produits;

	@ManyToOne
    private User user;



    public Transaction(){
        super();
    }

    public Transaction(String codeTransaction, LocalDate transDate, String transactDesc, TransactType transactType, float transactAmount){
        this.codeTransaction = codeTransaction;
        this.transDate = transDate;
        this.transactDesc = transactDesc;
        this.transactType = transactType;
        this.transactAmount = transactAmount;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodeTransaction() {
        return codeTransaction;
    }

    public void setCodeTransaction(String codeTransaction) {
        this.codeTransaction = codeTransaction;
    }
}