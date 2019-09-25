package com.moh.restaurant.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class TransactionLine{


    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private float debitAmount;
	private float creditAmount;

	private float quantity;
	private float unitValue;
	private LocalDate txDate;

	@ManyToOne
	private Produit produit;
	@ManyToOne
	@JoinColumn(name = "invoice_id", insertable=false, updatable=false)
	@JsonBackReference(value ="invoice-details")
	private  Invoice invoice;

	@ManyToOne
	@JoinColumn(name = "appro_id", insertable=false, updatable=false)
	@JsonBackReference(value ="appro-details")
	private  Appro appro;

	/**
	 * @return the appro
	 */
	public Appro getAppro() {
		return appro;
	}

	/**
	 * @return the unitValue
	 */
	public float getUnitValue() {
		return unitValue;
	}
	public Long getId() {
		return id;
	}
/**
 * @return the debitAmount
 */
public float getDebitAmount() {
	return debitAmount;
}

	/**
	 * @return the creditAmount
	 */
	public float getCreditAmount() {
		return creditAmount;
	}

	/**
	 * @param creditAmount the creditAmount to set
	 */
	public void setCreditAmount(float creditAmount) {
		this.creditAmount = creditAmount;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getQuantity() {
		return quantity;
	}

	public void setQuantity(float quantity) {
		this.quantity = quantity;
	}
	
	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	/**
	 * @return the txDate
	 */
	public LocalDate getTxDate() {
		return txDate;
	}/**
	 * @param txDate the txDate to set
	 */
	public void setTxDate(LocalDate txDate) {
		this.txDate = txDate;
	} 
/**
 * @param appro the appro to set
 */
public void setAppro(Appro appro) {
	this.appro = appro;
}
/**
 * @param unitValue the unitValue to set
 */
public void setUnitValue(float unitValue) {
	this.unitValue = unitValue;
}
/**
 * @param debitAmount the debitAmount to set
 */
public void setDebitAmount(float debitAmount) {
	this.debitAmount = debitAmount;
}

}