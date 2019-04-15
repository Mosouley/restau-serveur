package com.moh.restaurant.util;

public enum TransactionStatus {
    CANCELLED("Cancelled"),
    EMPORTE("Emporte"),
    SURPLACE("Sur place");

    private String name;

    TransactionStatus(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
