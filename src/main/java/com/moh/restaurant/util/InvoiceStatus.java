package com.moh.restaurant.util;

public enum InvoiceStatus {
    CANCELLED("Cancelled"), PAYE("Paye"), NONPAYE("Non paye");

    private String name;

    InvoiceStatus(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

