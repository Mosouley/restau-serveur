package com.moh.restaurant.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	protected void configure(HttpSecurity http) throws Exception{

		 http.authorizeRequests()
				 .antMatchers("/api/**").hasRole("USER")
		 .antMatchers("/v2/api-docs",
		 "/configuration/**", "/swagger*/**",
		  "/webjars/**").hasRole("ADMIN")
				 .antMatchers("/**").permitAll()
		 .and()
        .authorizeRequests()
        .anyRequest()
        .permitAll()
        .and()
        .csrf().disable().headers()
		 .frameOptions().disable();

		
 
logger.info("< doFilter");
	}

	
	protected void configure(AuthenticationManagerBuilder auth)
			throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(
				// NoOpPasswordEncoder.getInstance()
				passwordEncoder()
				);
	}

@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
}
