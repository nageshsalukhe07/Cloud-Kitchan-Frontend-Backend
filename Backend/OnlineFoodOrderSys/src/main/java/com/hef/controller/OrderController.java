package com.hef.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hef.entity.Order;
import com.hef.service.OrderService;

@RestController
@RequestMapping("/api/order")
@CrossOrigin(origins="http://localhost:3000")
public class OrderController {
	@Autowired
	OrderService service;

	@PostMapping("/ordersave")
	public String save(@RequestBody Order r) {
		return service.save(r);
		

	}

	@PostMapping("/ordersaveall")
	public String saveAll(@RequestBody List<Order> rlist) {
		return service.saveAll(rlist);

	}

	@GetMapping("/orderfindall")
	public List<Order> findAll() {
		return service.findAll();
	}

	@GetMapping("/orderfindbyid/{id}")
	public Optional<Order> findById(@PathVariable int oderId) {
		return service.findById(oderId);
	}
	
	@PutMapping("/orderupdate/{id}")
	public String updateOrder(@PathVariable int oderId, @RequestBody Order r1) {
		return service.updateMenuItem(oderId, r1);
	}

	

	  @DeleteMapping("/orderdeletebyid/{orderId}")
	    public ResponseEntity<String> deleteOrderById(@PathVariable int orderId) {
	        try {
	            service.deleteOrderById(orderId);
	            return ResponseEntity.ok("Order with ID " + orderId + " deleted successfully!");
	        } catch (RuntimeException e) {
	            return ResponseEntity.status(404).body("Error: " + e.getMessage());
	        }
	    }


	

}
