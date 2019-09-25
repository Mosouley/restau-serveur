package com.moh.restaurant.util;

public enum PaymentMode {
    CASH("Cash"), BANK("Bank"), MOBILE("MoMo");

    private String name;

    PaymentMode(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}