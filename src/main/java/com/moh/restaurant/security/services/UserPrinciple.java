package com.moh.restaurant.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.moh.restaurant.entities.User;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// Implementation of UserDetails which is spring security interface
// It helps store non securty information properly
public class UserPrinciple implements UserDetails {
      private static final long serialVersionUID = 1L;

      private Long id;

      private String name;

      private String userName;

      private String email;

      @JsonIgnore
      private String password;

      private Collection<? extends GrantedAuthority> authorities;

      // the constructor
      public UserPrinciple(Long id, String name,
                String userName, String email, String password,
                Collection<? extends GrantedAuthority> authorities) {
          this.id = id;
          this.name = name;
          this.userName = userName;
          this.email = email;
          this.password = password;
          this.authorities = authorities;
      }

      // Build a userPrinciple based of a user information and authorities
      public static UserPrinciple build(User user) {
          List<GrantedAuthority> authorities = user.getRoles().stream().map(role ->
                  new SimpleGrantedAuthority(role.getName().name())
          ).collect(Collectors.toList());

          return new UserPrinciple(
                  user.getId(),
                  user.getLastName(),
                  user.getUsername(),
                  user.getEmail(),
                  user.getPassword(),
                  authorities
          );
      }

      public Long getId() {
          return id;
      }

      public String getName() {
          return name;
      }

      public String getEmail() {
          return email;
      }

      @Override
      public String getUsername() {
          return userName;
      }

      @Override
      public String getPassword() {
          return password;
      }

      @Override
      public Collection<? extends GrantedAuthority> getAuthorities() {
          return authorities;
      }

      @Override
      public boolean isAccountNonExpired() {
          return true;
      }

      @Override
      public boolean isAccountNonLocked() {
          return true;
      }

      @Override
      public boolean isCredentialsNonExpired() {
          return true;
      }

      @Override
      public boolean isEnabled() {
          return true;
      }

      @Override
      public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null || getClass() != o.getClass()) return false;

          UserPrinciple user = (UserPrinciple) o;
          return Objects.equals(id, user.id);
      }
  }
