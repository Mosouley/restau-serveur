package com.moh.restaurant.entities;

import javax.persistence.*;

@Entity
public class Fournisseur{

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

    @Column
    private String nameSupplier;

    @Column
    private String citySupplier;
    @Column
    private String codeIFU;


    public Fournisseur() {
        super();
    }

    public Fournisseur(String nameSupplier, String codeIFU, String citySupplier) {
        this.citySupplier= citySupplier;
        this.codeIFU= codeIFU;
        this.nameSupplier= nameSupplier;
    }
    public Long getId(){
        return id;
        
    }

    public void setId(Long id){
        this.id=id;
    }
    public String getNameSupplier() {
        return nameSupplier;
    }

    public void setNameSupplier(String nameSupplier) {
        this.nameSupplier = nameSupplier;
    }

    public String getCodeIFU() {
        return codeIFU;
    }

    public void setCodeIFU(String codeIFU) {
        this.codeIFU = codeIFU;
    }

    public String getCitySupplier() {
        return citySupplier;
    }

    public void setCitySupplier(String citySupplier) {
        this.citySupplier = citySupplier;
    }
}