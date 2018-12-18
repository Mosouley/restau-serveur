package com.moh.restaurant.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fournisseur{

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
    private String nameSupplier;
    private String codeIFU;
    private String citySupplier;
}