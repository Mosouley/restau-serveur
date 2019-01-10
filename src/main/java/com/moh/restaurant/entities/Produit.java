package com.moh.restaurant.entities;


import javax.persistence.*;

@Entity
public class Produit {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;

	@Column
	private String ref;

	@Column
	private int stockMini;
	@Column
	private float coutUnitaire;

//	@Column
//	private CategorieProduit categorieProd;

	@Column
	private float prixUnitaire;

	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Produit(String ref, int stockMini, float prixUnitaire, float coutUnitaire) {
		super();
		this.ref = ref;
		this.stockMini= stockMini;
		this.prixUnitaire = prixUnitaire;
		this.coutUnitaire=coutUnitaire;
	}

	public String getRef() {
		return ref;
	}

	public void setRef(String ref) {
		this.ref = ref;
	}



	public float getPrixUnitaire() {
		return prixUnitaire;
	}

	public void setPrixUnitaire(float prixUnitaire) {
		this.prixUnitaire = prixUnitaire;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produit other = (Produit) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}


	public float getCoutUnitaire() {
		return coutUnitaire;
	}

	public void setCoutUnitaire(float coutUnitaire) {
		this.coutUnitaire = coutUnitaire;
	}

	public int getStockMini() {
		return stockMini;
	}

	public void setStockMini(int stockMini) {
		this.stockMini = stockMini;
	}


}
