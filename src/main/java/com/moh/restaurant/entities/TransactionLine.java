package com.moh.restaurant.entities;

import javax.persistence.*;

@Entity
public class TransactionLine{


    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private float transAmount;
	private float quantity;
	private float sellPrice;
	@ManyToOne
    private Produit produit;
	@ManyToOne
	private  Transactions transactions;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getTransAmount() {
		return transAmount;
	}

	public void setTransAmount(float transAmount) {
		this.transAmount = transAmount;
	}

	public float getQuantity() {
		return quantity;
	}

	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}

	public float getSellPrice() {
		return sellPrice;
	}

	public void setSellPrice(float sellPrice) {
		this.sellPrice = sellPrice;
	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public Transactions getTransactions() {
		return transactions;
	}

	public void setTransactions(Transactions transactions) {
		this.transactions = transactions;
	}
}