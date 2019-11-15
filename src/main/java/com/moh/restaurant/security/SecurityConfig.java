package com.moh.restaurant.security;

import com.moh.restaurant.security.jwt.JwtAuthEntryPoint;
import com.moh.restaurant.security.jwt.JwtAuthTokenFilter;
import com.moh.restaurant.security.services.UserDetailsServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(SecurityProperties.BASIC_AUTH_ORDER)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	// inject the custom implementation of userdetails
	@Autowired
	UserDetailsServiceImpl userDetailsService;
	// inject the custom implementation of jwtAuth
	@Autowired
	private JwtAuthEntryPoint unauthorizedHandler;

// inject a bean for the custom  jwt tolken filter
@Bean
public JwtAuthTokenFilter authenticationJwtTokenFilter() {
	return new JwtAuthTokenFilter();
}

@Override
public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
	authenticationManagerBuilder
			.userDetailsService(userDetailsService)
			.passwordEncoder(passwordEncoder());
}

@Bean
@Override
public AuthenticationManager authenticationManagerBean() throws Exception {
	return super.authenticationManagerBean();
}

@Bean
public PasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
}

@Override
protected void configure(HttpSecurity http) throws Exception {

	// Optional, if you want to test the API from a browser
	// http.httpBasic();
  http
  .httpBasic()
  .and()
  //     .formLogin().loginPage("/dashboard").permitAll()
  // .and()
      .requestMatchers().antMatchers("/", "/dashboard", "/login", "/logout", "/api/auth/**")
    .and()
      .authorizeRequests().anyRequest().authenticated()
      .and()
      //.authenticationEntryPoint(unauthorizedHandler)
      .exceptionHandling()
      .authenticationEntryPoint(unauthorizedHandler)
      .and()
      .csrf().disable()
			 .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
          // .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
			// .and()
			// .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
      http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
	// http.cors().and().csrf().disable().
	// 		authorizeRequests()
	// 		.antMatchers("/", "/api/auth/**","/dashboard").permitAll()
			// .antMatchers("/dashboard/**").permitAll()
			// .antMatchers("/api/auth/**").permitAll()
			// .anyRequest().authenticated() // fullyauth for users that are not remembered
			// .and()
			// .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
			// .and()
			// .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

  }


	@Override
	public void configure(WebSecurity web) throws Exception {
		// Allow swagger to be accessed without authentication
    web.ignoring().antMatchers("/v2/api-docs")//
        .antMatchers("/")  // tres important pour acceder a la page d'accueil
        .antMatchers("/swagger-resources/**")//
        .antMatchers("/*.bundle.*/**")//
        .antMatchers("/dashboard")//
        .antMatchers("/dashboard/**")//
        .antMatchers("/api/auth/**")//
				 .antMatchers("/uploads/**")//
				.antMatchers("/swagger-ui.html")//
				.antMatchers("/configuration/**")//
				.antMatchers("/webjars/**")//
				.antMatchers("/public");
    }

    // Necessary for adding directory for static content serving
    @Configuration
    public class AdditionalResourceWebConfiguration implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(final ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploads/**").addResourceLocations("file:uploads/");
    }
}
}
