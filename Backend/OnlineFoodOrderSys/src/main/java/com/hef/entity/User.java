package com.hef.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String address;
	private String email;
	private String mobileno;
	private String username;
	private String password;
	private String cpwd;
	public User() {
		super();
	}
	public User(String name, String address, String email, String mobileno, String username, String password,
			String cpwd) {
		super();
		this.name = name;
		this.address = address;
		this.email = email;
		this.mobileno = mobileno;
		this.username = username;
		this.password = password;
		this.cpwd = cpwd;
	}
	public Long getid() {
		return id;
	}
	public void setUser_id(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
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
	
		public String getCpwd() {
		return cpwd;
	}
	public void setCpwd(String cpwd) {
		this.cpwd = cpwd;
	}
	@Override
	public String toString() {
		return "User [name=" + name + ", username=" + username + ", password=" + password + ", cpwd=" + cpwd + "]";
	}
		
	
	
}
