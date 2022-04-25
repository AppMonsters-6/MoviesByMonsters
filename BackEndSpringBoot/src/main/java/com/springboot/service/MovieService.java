package com.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.springboot.model.Movie;
import com.springboot.repository.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	public List<Movie> findAll() { // returning the list of all existing movies
		return repository.findAll();
	}
	
	public Object insert(Movie m) { // inserts a new movie to the database
		/*
		 * boolean status = repository.existsById(m.getId()); // checks if the movie is
		 * alreading or not
		 */ /*
			 * if(status) { return HttpStatus.FOUND; // if movie already exists, it says
			 * "FOUND" }
			 */
		repository.save(m); // if movie doesn't exist, it will insert the entered movie
		return HttpStatus.CREATED; // if movie is inserted it says "CREATED" 
	}
	
	public Object update(Movie m) { // code to update the movie
		Optional<Movie> o = repository.findById(m.getId());
		if(o.isPresent()) {
			repository.save(m);
			return HttpStatus.OK;
		}
		return HttpStatus.NOT_FOUND;	
	}
	
	public Object delete(Integer id) { // code to delete a movie
		if(repository.existsById(id)) {
			repository.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.NOT_FOUND;
	}
	
	public Object find(Integer id) { // code to find a movie by its id
		boolean status = repository.existsById(id);
		if(status) {
			repository.getById(id);
			return HttpStatus.FOUND;
		}
		return HttpStatus.NOT_FOUND;
	}
	
	public Object findByMovieName(String name) {
		Movie m = repository.findByMovieName(name);
		if(m == null) {
			return HttpStatus.NOT_FOUND;
		}
		return m;
	}
	
	public Object findById(Integer id) {
		Optional<Movie> m = repository.findById(id);
		return m.get();
	}
	
	public List<String> findAllMovieNames() {
		return repository.findMovieName();
	}
	
		
}
