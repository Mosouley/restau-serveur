package com.moh.restaurant.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.moh.restaurant.util.TypeSpending;

@Entity
public class Spending{

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column
    private LocalDate dateSpending;
    private TypeSpending typeSpending;
    private   float valueSpending;
    private String commentSpending;

    public Spending(){

    }
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    /**
     * @return the commentSpending
     */
    public String getCommentSpending() {
        return commentSpending;
    }
    /**
     * @return the dateSpending
     */
    public LocalDate getDateSpending() {
        return dateSpending;
    }
    /**
     * @return the typeSpending
     */
    public TypeSpending getTypeSpending() {
        return typeSpending;
    }
    /**
     * @return the valueSpending
     */
    public float getValueSpending() {
        return valueSpending;
    }
    /**
     * @param commentSpending the commentSpending to set
     */
    public void setCommentSpending(String commentSpending) {
        this.commentSpending = commentSpending;
    }
    /**
     * @param dateSpending the dateSpending to set
     */
    public void setDateSpending(LocalDate dateSpending) {
        this.dateSpending = dateSpending;
    }

    /**
     * @param typeSpending the typeSpending to set
     */
    public void setTypeSpending(TypeSpending typeSpending) {
        this.typeSpending = typeSpending;
    }
    /**
     * @param valueSpending the valueSpending to set
     */
    public void setValueSpending(float valueSpending) {
        this.valueSpending = valueSpending;
    }

}