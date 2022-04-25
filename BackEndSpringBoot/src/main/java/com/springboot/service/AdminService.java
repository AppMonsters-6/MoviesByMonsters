package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.springboot.model.Admin;
import com.springboot.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository repository;

	public List<Admin> findAll() { // returning the list of all existing movies
		return repository.findAll();
	}

	public Object insert(Admin a) { // inserts a new movie to the database
		/*
		 * if (repository.existsById(a.getAdminId())) { // checks if the movie is
		 * alreading or not return HttpStatus.FOUND; // if movie already exists, it says
		 * "FOUND" }
		 */
		repository.save(a); // if movie doesn't exist, it will insert the entered movie
		return HttpStatus.CREATED; // if admin is inserted it says "CREATED"
	}
	
	public Object update(Admin a) { // code to update the movie
		Optional<Admin> o = repository.findById(a.getAdminId());
		if(o.isPresent()) {
			repository.save(a);
			return HttpStatus.OK;
		}
		return HttpStatus.NOT_FOUND;	
	}
	
	public Object delete(Integer id) { // code to delete an admin
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.NOT_FOUND;
	}
	
	public Object find(Integer id) { // code to find a movie by its id
		if(repository.existsById(id)) {
			repository.getById(id);
			return HttpStatus.FOUND;
		}
		return HttpStatus.NOT_FOUND;
	}
	
	public String find(String name) {
		Admin a = repository.findByAdminName(name);
		String str = null;
		if(a == null) {
			str="NOT FOUND";
		} else {
			str = a.getAdminLogin().getPassword();
		}
		String fmt=String.format("{\"text\": \"%s\"}", str);
		return fmt;
	}
	
}
