package com.moh.restaurant.entities;

import com.moh.restaurant.util.TransactionStatus;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;

@Entity
public class Transactions {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateTrans;

    private TransactionStatus Statut;

    @ManyToOne
    private Client client;

    @OneToMany(mappedBy = "transactions")
    private Collection<TransactionLine> transactionLines;

    @ManyToOne
    private User user;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateTrans() {
        return dateTrans;
    }

    public void setDateTrans(LocalDate dateTrans) {
        this.dateTrans = dateTrans;
    }

    public TransactionStatus getStatut() {
        return Statut;
    }

    public void setStatut(TransactionStatus statut) {
        Statut = statut;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
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
}
