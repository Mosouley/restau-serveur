package com.moh.restaurant.entities;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Privilege {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="privilege_id")
    private Long id;
 
    private String name;
 
    @ManyToMany(mappedBy = "privileges")
    private Collection<Role> roles;

     public Privilege(){
         
     }
    public Privilege(String name){
        this.name = name;
    }
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }
    /**
     * @return the roles
     */
    public Collection<Role> getRoles() {
        return roles;
    }
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * @param roles the roles to set
     */
    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
    @Override
    public int hashCode() {
        return super.hashCode();
    }
    @Override
    public String toString() {
        return super.toString();
    }
}