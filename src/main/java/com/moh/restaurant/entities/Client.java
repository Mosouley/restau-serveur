package com.moh.restaurant.entities;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;


@Entity
public class Client{

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
   
    
    private String nameClient;
    private String codeIfuClient;
    
    private String phoneClient;

    @OneToMany
    private Collection<Transactions> transactions;

    public Client() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameClient() {
        return nameClient;
    }

    public void setNameClient(String nameClient) {
        this.nameClient = nameClient;
    }

    public String getCodeIfuClient() {
        return codeIfuClient;
    }

    public void setCodeIfuClient(String codeIfuClient) {
        this.codeIfuClient = codeIfuClient;
    }

    public String getPhoneClient() {
        return phoneClient;
    }

    public void setPhoneClient(String phoneClient) {
        this.phoneClient = phoneClient;
    }

    public Collection<Transactions> getTransactions() {
        return transactions;
    }

    public void setTransactions(Collection<Transactions> transactions) {
        this.transactions = transactions;
    }
}