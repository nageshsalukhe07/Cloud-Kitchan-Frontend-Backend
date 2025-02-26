package com.hef.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hef.entity.User;
import com.hef.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository uresp;

	public String save(User u) {
		if (uresp.findByUsername(u.getUsername()).isPresent()) {
			return "Username is already exist";
		} else
			uresp.save(u);
		return "User record added sucessfully";
	}

//	public String longininfo(Map<String,String> logindata) {
//		
//		String username=logindata.get("username");
//		String password=logindata.get("password");
//		
//		User existinguser=uresp.findByUsername(username).orElse(null);
//		
//		if(existinguser.getUsername().equals(username) && existinguser.getPassword().equals(password)) {
//			return "login successfully";
//		}
//		else
//			return "Invalid username or password";
//		
//	}
//
//	public String longininfo(String username, String password) {
//
//		User existinguser = uresp.findByUsername(username).orElse(null);
//
//		if (existinguser.getUsername().equals(username) && existinguser.getPassword().equals(password)) {
//			return "login successfully"+existinguser.getid();
//		} else
//			return "Invalid username or password";
//
//	}
	
	public String longininfo(String username, String password) {
	    // Fetch the user by username
	    User existingUser = uresp.findByUsername(username).orElse(null);

	    // Check if the user exists and validate credentials
	    if (existingUser != null && existingUser.getUsername().equals(username) && existingUser.getPassword().equals(password)) {
	        return "Login successful. User ID: " + existingUser.getid();
	        } else {
	        return "Invalid username or password";
	    }
	}


}
