package com.moh.restaurant.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;

@Entity
public class Entree {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Produit produit;

    private float quantite;

    private  float coutEntree;

    private LocalDate date;

    @ManyToOne
    private  User user;

    public Entree() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    public float getQuantite() {
        return quantite;
    }

    public void setQuantite(float quantite) {
        this.quantite = quantite;
    }

    public float getCoutEntree() {
        return coutEntree;
    }

    public void setCoutEntree(float coutEntree) {
        this.coutEntree = coutEntree;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
