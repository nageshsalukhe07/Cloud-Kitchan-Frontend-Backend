package com.hef.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Order_tbl")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oderId;
	private String orderDate;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToMany
	@JoinTable(name = "order_menuitem", joinColumns = @JoinColumn(name = "order_id"), inverseJoinColumns = @JoinColumn(name = "menuitem_id"))
	private List<MenuItem> menuItems=new ArrayList<MenuItem>();

	private double totalPrice;

	public Order() {
		super();
	}

	public Order(String orderDate, double totalPrice) {
		super();
		this.orderDate = orderDate;
		this.totalPrice = totalPrice;
	}

	public Order(int oderId, String orderDate, double totalPrice) {
		super();
		this.oderId = oderId;
		this.orderDate = orderDate;
		this.totalPrice = totalPrice;
	}

	public int getOderId() {
		return oderId;
	}

	public void setOderId(int oderId) {
		this.oderId = oderId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<MenuItem> getMenuItems() {
		return menuItems;
	}

	public void setMenuItems(List<MenuItem> menuItems) {
		this.menuItems = menuItems;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	

}
