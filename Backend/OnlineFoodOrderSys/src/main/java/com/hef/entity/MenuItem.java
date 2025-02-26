package com.hef.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MenuItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
	private String name;
	private String description;
	private int price;
	private int availableQty;
	private double discount;
	private String img;
	public MenuItem() {
		super();
	}
	public MenuItem(String name, String description, int price, int availableQty, double discount, String img) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.availableQty = availableQty;
		this.discount = discount;
		this.img = img;
	}
	public MenuItem(int id, String name, String description, int price, int availableQty, double discount, String img) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.availableQty = availableQty;
		this.discount = discount;
		this.img = img;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getAvailableQty() {
		return availableQty;
	}
	public void setAvailableQty(int availableQty) {
		this.availableQty = availableQty;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	@Override
	public String toString() {
		return "MenuItem [name=" + name + ", price=" + price + "]";
	}
	
}