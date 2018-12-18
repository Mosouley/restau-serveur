package com.moh.restaurant.util;


public enum TransactType{
    TYPE_IN("TYPE_IN"),
    TYPE_OUT("TYPE_OUT"),
    TYPE_FACTURE("TYPE_FACT"),
    TYPE_DEVIS("TYPE_DEVIS");
	
	private String name;
	
	TransactType(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}