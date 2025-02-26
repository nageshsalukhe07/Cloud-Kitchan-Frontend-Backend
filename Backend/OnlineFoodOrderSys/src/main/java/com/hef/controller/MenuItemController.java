package com.hef.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hef.entity.MenuItem;
import com.hef.service.MenuItemService;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins="http://localhost:3000")
public class MenuItemController {
	@Autowired
	MenuItemService service;

	@PostMapping("/menusave")
	public String save(@RequestBody MenuItem mitem) {
		service.save(mitem);
		return "data add successfully";

	}

	@PostMapping("/menusaveall")
	public String saveAll(@RequestBody List<MenuItem> mitemlist) {
		return service.saveAll(mitemlist);

	}

	@GetMapping("/menufindall")
	public List<MenuItem> findAll() {
		return service.findAll();
	}

	@GetMapping("/menufindbyid/{id}")
	public Optional<MenuItem> findById(@PathVariable int id) {
		return service.findById(id);
	}
	
	@PutMapping("/menuupdate/{id}")
	public String updateMenuItem(@PathVariable int id, @RequestBody MenuItem m1) {
		return service.updateMenuItem(id, m1);
	}

	@GetMapping("/menufindbyname/{name}")
	public MenuItem findByName(@PathVariable String name) {
		return service.findByName(name);
	}

	@DeleteMapping("/menudeletebyid/{id}")
	public String deleteById(@PathVariable int id) {
		return service.deleteById(id);

	}

	@DeleteMapping("/menudeletebyname/{name}")
	public String deleteByName(@PathVariable String name) {
		return service.deleteByName(name);

	}

}
