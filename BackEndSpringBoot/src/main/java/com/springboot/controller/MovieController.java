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

import com.springboot.model.Movie;
import com.springboot.service.MovieService;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {
	
	@Autowired
	private MovieService service;

	@GetMapping("/collection")
	public List<Movie> findAll() {
		return service.findAll();
	}
	
	@PostMapping("/add")
	public Object insert(@RequestBody Movie m) {
		System.out.println("In insert, movie is " + m);
		return service.insert(m);
	}
	
	@DeleteMapping("/remove/{id}")
	public Object delete(@PathVariable("id") Integer id) {
		return service.delete(id);
	}
	
	@PutMapping("/update")
	public Object update(@RequestBody Movie m) {
		return service.update(m); 
	}
	
	@GetMapping("/find/{id}") 
	public Object find(@PathVariable("id") Integer id) {
		return service.find(id);
	}
	
	@GetMapping("/findByName")
	public Object findByName(@RequestParam("movieName") String movieName) {
		return service.findByMovieName(movieName);
	}
	
	@GetMapping("/movie/{id}")
	public Object findById(@PathVariable("id") Integer id) {
		return service.findById(id);
	}
	
	@GetMapping("/movieNames")
	public List<String> findAllMovieNames() {
		return service.findAllMovieNames();
	}
	

}
