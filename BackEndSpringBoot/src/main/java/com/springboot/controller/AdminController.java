package com.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Admin;
import com.springboot.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:4200")
public class AdminController {
	@Autowired
	private AdminService service;

	@GetMapping("/list")
	public List<Admin> findAll() {
		return service.findAll();
	}

	@PostMapping("/add")
	public Object insert(@RequestBody Admin a) {
		return service.insert(a);
	}

	@DeleteMapping("/delete/{id}")
	public Object delete(@PathVariable("id") Integer id) {
		return service.delete(id);
	}

	@PutMapping("/updateadmin")
	public Object update(@RequestBody Admin a) {
		return service.update(a);
	}

	@GetMapping("findadmin/{id}")
	public Object find(@PathVariable("id") Integer id) {
		return service.find(id);
	}
	
	@GetMapping("/byEmail")
	public String find(@RequestParam("name") String name) {
		return service.find(name);
	}

}
