package com.hef.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hef.entity.MenuItem;
import com.hef.repository.MenuItemRepository;

@Service
public class MenuItemService {
	
	@Autowired
	MenuItemRepository mresp;
	
	public String save(MenuItem mitem) {
		mresp.save(mitem);
		return "data add successfully";
		
	}
	
	public String saveAll(List<MenuItem> mitemlist) {
		mresp.saveAll(mitemlist);
		return "list add successfully";
		
	}

	public List<MenuItem> findAll(){
		return mresp.findAll();
	}

	public Optional<MenuItem> findById(int id) {
		return mresp.findById(id);
	}
	
	public String updateMenuItem(int id,MenuItem m1) {
		
		MenuItem m2=mresp.findById(id).orElse(null);
		if(m1!=null) {
			if(m1.getId()!=0) {
				m2.setId(m1.getId());
			}
			if(m1.getName()!=null) {
				m2.setName(m1.getName());
			}
			if(m1.getPrice()!=0) {
				m2.setPrice(m1.getPrice());
			}
			if(m1.getDescription()!=null) {
				m2.setDescription(m1.getDescription());
			}
			if(m1.getAvailableQty()!=0) {
				m2.setAvailableQty(m1.getAvailableQty());
			}
			if(m1.getDiscount()!=0) {
				m2.setDiscount(m1.getDiscount());
			}if(m1.getImg()!=null) {
				m2.setImg(m1.getImg());
			}
			
		}
		  mresp.save(m2);
		return "record updated successfully";
	}
	
	public MenuItem findByName(String name) {
		return mresp.findByName(name);
	}

	public String deleteById(int id) {
		mresp.deleteById(id);
		return "delete MenuItem successfully";
	}

	public String deleteByName(String name) {
		mresp.deleteByName(name);
		return "delete MenuItem successfully";
	}

}

