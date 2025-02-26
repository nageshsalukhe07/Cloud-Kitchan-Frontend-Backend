package com.hef.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hef.entity.MenuItem;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Integer> {

	public String deleteById(int id);
	public MenuItem findByName(String name);
	public String deleteByName(String name);
	
}
