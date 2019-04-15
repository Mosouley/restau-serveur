package com.moh.restaurant.entities;


import javax.persistence.*;
import java.util.List;

@Entity
public class Produit {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, unique = true,length = 10)
	private String codeProd;

	private String descProduit;

	@Column
	private int stockMini;
	@Column
	private float coutUnitaire;

	@Column
	private float prixUnitaire;

	@ManyToOne
	private Category category;


	@ManyToMany(mappedBy = "produits")
	private List<Fournisseur> fournisseurs;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodeProd() {
		return codeProd;
	}

	public void setCodeProd(String codeProd) {
		this.codeProd = codeProd;
	}

	public String getDescProduit() {
		return descProduit;
	}

	public void setDescProduit(String descProduit) {
		this.descProduit = descProduit;
	}

	public int getStockMini() {
		return stockMini;
	}

	public void setStockMini(int stockMini) {
		this.stockMini = stockMini;
	}

	public float getCoutUnitaire() {
		return coutUnitaire;
	}

	public void setCoutUnitaire(float coutUnitaire) {
		this.coutUnitaire = coutUnitaire;
	}

	public float getPrixUnitaire() {
		return prixUnitaire;
	}

	public void setPrixUnitaire(float prixUnitaire) {
		this.prixUnitaire = prixUnitaire;
	}

	public Category getCategory() {
		return category;
	}
	public Produit category(Category category){
		this.category = category;
		return this;
	}
	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Fournisseur> getFournisseurs() {
		return fournisseurs;
	}

	public void setFournisseurs(List<Fournisseur> fournisseurs) {
		this.fournisseurs = fournisseurs;
	}
}
