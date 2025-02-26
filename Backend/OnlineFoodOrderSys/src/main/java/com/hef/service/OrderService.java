package com.hef.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hef.entity.Order;
import com.hef.repository.OrderRepository;

import jakarta.transaction.Transactional;

@Service
public class OrderService {
	
	@Autowired
	OrderRepository rresp;
	
	public String save(Order r) {
		rresp.save(r);
		return "data added successfully";
		
	}
	
	public String saveAll(List<Order> rlist) {
		rresp.saveAll(rlist);
		return "list add successfully";
		
	}

	public List<Order> findAll(){
		return rresp.findAll();
	}

	public Optional<Order> findById(int oderId) {
		return rresp.findById(oderId);
	}
	
	public String updateMenuItem(int oderId,Order r1) {
		
		Order r2=rresp.findById(oderId).orElse(null);
		if(r1!=null) {
			if(r1.getOderId()!=0) {
				r2.setOderId(r1.getOderId());
			}
			if(r1.getOrderDate()!=null) {
				r2.setOrderDate(r2.getOrderDate());
			}
			if(r1.getTotalPrice()!=0) {
				r2.setTotalPrice(r1.getTotalPrice());
			}
			if(r1.getUser()!=null) {
				r2.setUser(r1.getUser());
			}
			if(r1.getMenuItems()!=null) {
				r2.setMenuItems(r1.getMenuItems());
			}
			
			
		}
		rresp.save(r2);
		return "record updated successfully";
	}
	
	
	 @Transactional
	    public void deleteOrderById(int orderId) {
	        if (rresp.existsById(orderId)) {
	        	rresp.deleteById(orderId);
	        } else {
	            throw new RuntimeException("Order with ID " + orderId + " not found");
	        }
	    }

	

}

