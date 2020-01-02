package com.moh.restaurant.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Company{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nameCompany;
    private String codeIfuCompany;
    private String adressCompany;
    @Column(nullable = false)
    private String phoneCompany;

    @Size(max = 256)
    @Column(name = "logo_url", length = 256)
    private String logoCompany;

    public  Company() {

    }
    /**
     * @return the adressCompany
     */
    public String getAdressCompany() {
        return adressCompany;
    }
    /**
     * @return the codeIfuCompany
     */
    public String getCodeIfuCompany() {
        return codeIfuCompany;
    }
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
    /**
     * @return the logoCompany
     */
    public String getLogoCompany() {
        return logoCompany;
    }/**
     * @return the nameCompany
     */
    public String getNameCompany() {
        return nameCompany;
    }
    /**
     * @return the phoneCompany
     */
    public String getPhoneCompany() {
        return phoneCompany;
    }
    /**
     * @param adressCompany the adressCompany to set
     */
    public void setAdressCompany(String adressCompany) {
        this.adressCompany = adressCompany;
    }
    /**
     * @param codeIfuCompany the codeIfuCompany to set
     */
    public void setCodeIfuCompany(String codeIfuCompany) {
        this.codeIfuCompany = codeIfuCompany;
    }
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    /**
     * @param logoCompany the logoCompany to set
     */
    public void setLogoCompany(String logoCompany) {
        this.logoCompany = logoCompany;
    }
    /**
     * @param nameCompany the nameCompany to set
     */
    public void setNameCompany(String nameCompany) {
        this.nameCompany = nameCompany;
    }
    /**
     * @param phoneCompany the phoneCompany to set
     */
    public void setPhoneCompany(String phoneCompany) {
        this.phoneCompany = phoneCompany;
    }

}
