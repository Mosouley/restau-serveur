package com.moh.restaurant.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = { "username" }),
    @UniqueConstraint(columnNames = { "email" }) })
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "user_id")
  private Long id;

  @Size(min = 4, max = 50, message = "Minimum username length: 4 characters")
  @NotBlank
  private String username;

  @NotBlank
  @Size(min = 3, max = 50)
  private String lastName;

  @NaturalId
  @NotBlank
  @Size(max = 60)
  @Email(message = "Not a valid Email Adress")
  private String email;

  @JsonIgnore
  @NotBlank
  @Size(min = 6, max = 100)
  @Column(name = "password_hash")
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
      @JoinColumn(name = "role_id") })
  private Set<Role> roles;

  // @ElementCollection(fetch = FetchType.EAGER)
  // List<Role> roles;

  public User(String lastname, String username, String email, String password) {
    this.lastName = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  /**
   * @return the email
   */
  public String getEmail() {
    return email;
  }

  /**
   * @param email the email to set
   */
  public void setEmail(String email) {
    this.email = email;
  }

  /**
   * @return the lastName
   */
  public String getLastName() {
    return lastName;
  }

  /**
   * @param lastName the lastName to set
   */
  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public User() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  /**
   * @return the roles
   */
  public Set<Role> getRoles() {
    return roles;
  }

  /**
   * @param roles the roles to set
   */
  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

}
