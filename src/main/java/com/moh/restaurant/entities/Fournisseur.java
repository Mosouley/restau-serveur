package com.moh.restaurant.entities;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Fournisseur{

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

    @Column
    private String nameSupplier;

    @Column
    private String phoneSupplier;

    @Column
    private String codeIfuSupplier;

    @ManyToMany
    private List<Produit> produits;


    public Fournisseur() {

    }

    public Fournisseur(String nameSupplier, String codeIfuSupplier, String phoneSupplier) {
        this.phoneSupplier= phoneSupplier;
        this.codeIfuSupplier= codeIfuSupplier;
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

    public String getcodeIfuSupplier() {
        return codeIfuSupplier;
    }

    public void setcodeIfuSupplier(String codeIfuSupplier) {
        this.codeIfuSupplier = codeIfuSupplier;
    }

    public String getphoneSupplier() {
        return phoneSupplier;
    }

    public void setphoneSupplier(String phoneSupplier) {
        this.phoneSupplier = phoneSupplier;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Fournisseur that = (Fournisseur) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getNameSupplier(), that.getNameSupplier()) &&
                Objects.equals(phoneSupplier, that.phoneSupplier) &&
                Objects.equals(codeIfuSupplier, that.codeIfuSupplier) &&
                Objects.equals(produits, that.produits);
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getNameSupplier(), phoneSupplier, codeIfuSupplier, produits);
    }
}