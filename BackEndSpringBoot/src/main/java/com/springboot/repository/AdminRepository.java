package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springboot.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	@Query("SELECT a FROM Admin a INNER JOIN FETCH a.adminLogin l WHERE l.username=:name")
	public Admin findByAdminName(@Param("name") String name);


}
