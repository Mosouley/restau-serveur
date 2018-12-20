package com.moh.restaurant.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	
	protected void configure(HttpSecurity http) throws Exception{
		http
		.httpBasic()
			.and()
				.authorizeRequests()
					.antMatchers("/api/**")
						.hasRole("USER")
					.antMatchers(
						"/v2/api-docs", 
						"/swagger-resources/**",  
						"/swagger-ui.html", 
						"/webjars/**" ,
						"/swagger.json")
						.hasRole("ADMIN")
						
						.and()
							.csrf().disable().headers()
								.frameOptions().disable();
		// http.authorizeRequests()
		// .antMatchers("/v2/api-docs", 
		// "/swagger-resources/**", 
		// "/swagger-ui.html",
		//  "/webjars/**").permitAll()
		// // .antMatchers(
        // //     "/v2/api-docs", 
        // //     "/swagger-resources/**",  
        // //     "/swagger-ui.html", 
        // //     "/webjars/**" ,
        // //      /*Probably not needed*/ "/swagger.json")
        // // .permitAll();
		// .and()
        // .authorizeRequests()
        // .anyRequest()
        // .authenticated()
        // .and()
        // .csrf().disable();
	}
// 	@Override
// public void configure(WebSecurity web) throws Exception {
//     web.ignoring().antMatchers("/v2/api-docs", "/configuration/ui", "/swagger-resources", "/configuration/security", "/swagger-ui.html", "/webjars/**");
// }
	
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
