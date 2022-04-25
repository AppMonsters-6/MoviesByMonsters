package com.springboot.controller;

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

import com.springboot.model.User;
import com.springboot.model.UserLogin;
import com.springboot.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:4200")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("/findById/{id}")
	public Object findById(@PathVariable("id") Integer id) {
		return service.findById(id);
	}

	@PostMapping("/add")
	public Object insert(@RequestBody User u) {
		return service.insert(u);
	}

	@PutMapping("/update")
	public Object update(@RequestBody User u) {
		return service.update(u);
	}

	@DeleteMapping("/delete/{id}")
	public Object delete(Integer id) {
		return service.delete(id);
	}

	@GetMapping("/byemail")
	public String find(@RequestParam String email) { 
		return service.find(email);
	}

}
