package com.moh.restaurant.entities;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length =10, unique = true, nullable = false)
    private String nameCategory;

    @Column(nullable = false)
    private LocalDate createAt;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category", cascade =CascadeType.PERSIST, orphanRemoval = true)
    @JsonIgnore
    private Collection<Produit> produits;


    public Category() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameCategory() {
        return nameCategory;
    }

    public void setNameCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }

    public LocalDate getCreateAt() {
        return createAt;
    }

    public void setCreateAt(LocalDate createAt) {
        this.createAt = createAt;
    }

    public Category produits(Collection<Produit> produits){
        this.produits = produits;
        return this;
    }
    public Category addProduit(Produit produit){
        this.produits.add(produit);
        produit.setCategory(this);
        return this;
    }
    public Category removeProduit(Produit produit){
        this.produits.remove(produit);
        produit.setCategory(null);
        return this;
    }
    public Collection<Produit> getProduits() {
        return produits;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return Objects.equals(getId(), category.getId()) &&
                Objects.equals(getNameCategory(), category.getNameCategory()) &&
                Objects.equals(getCreateAt(), category.getCreateAt()) &&
                Objects.equals(getProduits(), category.getProduits());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getNameCategory(), getCreateAt(), getProduits());
    }
}
