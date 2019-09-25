package com.moh.restaurant.entities;

import java.time.LocalDate;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.moh.restaurant.util.InvoiceStatus;
import com.moh.restaurant.util.PaymentMode;


@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique =true, nullable =false)
    private String invoiceRef;

    private LocalDate dateTrans;

    private InvoiceStatus statut;

    private PaymentMode paymentMode;

    @ManyToOne
    private Client client;
    private Double totalInvoice;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "invoice_id")
    @JsonManagedReference(value="invoice-details")
    private Collection<TransactionLine> transactionLines;

    @ManyToOne
    private User user;

    public Invoice(){

    }

    /**
     * @return the paymentMode
     */
    public PaymentMode getPaymentMode() {
        return paymentMode;
    }

    /**
     * @param paymentMode the paymentMode to set
     */
    public void setPaymentMode(PaymentMode paymentMode) {
        this.paymentMode = paymentMode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
/**
 * @return the invoiceRef
 */
public String getInvoiceRef() {
    return invoiceRef;
}
/**
 * @param invoiceRef the invoiceRef to set
 */
public void setInvoiceRef(String invoiceRef) {
    
     this.invoiceRef = invoiceRef;
}
    public LocalDate getDateTrans() {
        return dateTrans;
    }

    public void setDateTrans(LocalDate dateTrans) {
        this.dateTrans = dateTrans;
    }

    public InvoiceStatus getStatut() {
        return statut;
    }

    public void setStatut(InvoiceStatus statut) {
        this.statut = statut;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Invoice transactionLines(Collection< TransactionLine > transax){
        
        this.transactionLines = transax;
        return this;
    }
    public void addTransactionLine(TransactionLine transax){
                this.transactionLines.add(transax);
                transax.setInvoice(this);

    }
    public Invoice removeTransaction(TransactionLine transax){
        this.transactionLines.remove(transax);
        transax.setInvoice(null);
        return this;
    }
    public Collection<TransactionLine> getTransactionLines() {
        return transactionLines;
    }

    public void setTransactionLines(Collection<TransactionLine> transactionLines) {
        this.transactionLines = transactionLines;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    /**
 * @return the totalInvoice
 */
public Double getTotalInvoice() {
    return totalInvoice;
}
/**
 * @param totalInvoice the totalInvoice to set
 */
public void setTotalInvoice(Double totalInvoice) {
    this.totalInvoice = totalInvoice;
}
}
