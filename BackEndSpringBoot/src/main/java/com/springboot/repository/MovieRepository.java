package com.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springboot.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
	
	public Movie findByMovieName(String movieName);

	@Query("SELECT m.movieName FROM Movie m")
	public List<String> findMovieName();
	

}
