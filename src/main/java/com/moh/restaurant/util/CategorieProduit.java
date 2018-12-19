package com.moh.restaurant.util;


public enum CategorieProduit {
    METS("METS"),
    JUS("JUS"),
    BOISSONS("BOISSONS");

	private String name;

	CategorieProduit(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}