package com.moh.restaurant.entities;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
public class Sortie {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Produit produit;

    private float quantite;

    private  float prixvente;

    private LocalDate date;

    @ManyToOne
    private  User user;

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

    public float getPrixvente() {
        return prixvente;
    }

    public void setPrixvente(float prixvente) {
        this.prixvente = prixvente;
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
