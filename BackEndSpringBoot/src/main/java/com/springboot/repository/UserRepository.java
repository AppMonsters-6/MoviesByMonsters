package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springboot.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("select u from User u inner join fetch u.userLogin l where l.email=?1")
	public User findByEmailId(@Param("email") String email);
}
