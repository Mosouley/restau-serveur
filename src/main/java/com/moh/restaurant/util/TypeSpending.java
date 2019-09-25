package com.moh.restaurant.util;

public enum TypeSpending {

    CHARGES_PERSONNEL("Salaires"),
  LOYER_LOCATIONS("Charges locatives"),
  TRANSPORT("Charges de transport"),
  CHARGES_ELECTRICITE("Charges Electricite"),
  CHARGES_EAU("Charges Eau");

    private String name;

    TypeSpending(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}