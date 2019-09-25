package com.moh.restaurant.controller.message.response;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class JwtResponse {
    private String accessToken;
    private String tokenType = "Bearer";
 
    private String username;
    private Collection<? extends GrantedAuthority> authorities;
   
    public JwtResponse(String accessToken, String username, Collection<? extends GrantedAuthority> authorities) {
      this.accessToken = accessToken;
      this.username = username;
      this.authorities = authorities;
    }

/**
 * @return the authorities
 */
public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
}


/**
 * @return the username
 */
public String getUsername() {
    return username;
}
/**
 * @param username the username to set
 */
public void setUsername(String username) {
    this.username = username;
}


    public String getAccessToken() {
        return accessToken;
    }
 
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
 
    public String getTokenType() {
        return tokenType;
    }
 
    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}