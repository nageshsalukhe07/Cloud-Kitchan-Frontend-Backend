package com.hef;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {


	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		 http.csrf().disable()  
	        .cors() // Enable CORS
	        .and()
	        .authorizeHttpRequests(auth -> auth
	            .requestMatchers("/api/order/ordersave").permitAll()
	            .requestMatchers("/api/order/orderfindall").permitAll()
	            .requestMatchers("/api/order/orderdeletebyid/{id}").permitAll() 
	            .requestMatchers("/api/order/orderupdate/{id}").permitAll() 
	            .requestMatchers("/api/order/orderfindbyid/{id}").permitAll()
	            
	            .requestMatchers("/api/menu/menusave").permitAll()
	            .requestMatchers("/api/menu/menusaveall").permitAll()
	            .requestMatchers("/api/menu/menufindall").permitAll()
	            .requestMatchers("/api/menu/menuupdate/{id}").permitAll()
	            .requestMatchers("/api/menu/menudeletebyid/{id}").permitAll()
	            .requestMatchers("/api/menu/menufindbyid/{id}").permitAll()
	            
	            .requestMatchers("/api/user/register").permitAll()
	            .requestMatchers("/api/user/login").permitAll()
	            
		          
	            
	        )
	        .formLogin()
	        .and()
	        .logout();

	    return http.build();
	}


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

   
}
