package com.moh.restaurant.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Client{

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
   
    @Column
    private String nameClient;
    @Column
    private String codeClient;
    @Column
    private String cityClient;

    public Client() {
        super();
    }

    public Client(String nameClient, String codeClient, String cityClient) {
        this.cityClient= cityClient;
        this.codeClient= codeClient;
        this.nameClient= nameClient;
    }
    public Long getId(){
        return id;
        
    }

    public void setId(Long id){
        this.id=id;
    }
    public String getNameClient() {
        return nameClient;
    }

    public void setNameClient(String nameClient) {
        this.nameClient = nameClient;
    }

    public String getCodeClient() {
        return codeClient;
    }

    public void setCodeClient(String codeClient) {
        this.codeClient = codeClient;
    }

    public String getCityClient() {
        return cityClient;
    }

    public void setCityClient(String cityClient) {
        this.cityClient = cityClient;
    }
    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
    @Override
    public int hashCode() {
        return super.hashCode();
    }
}