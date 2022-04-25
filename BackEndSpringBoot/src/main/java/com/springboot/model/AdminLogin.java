package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "ADMINLOGIN")
public class AdminLogin {
	@Id
	@Column(name = "LOGIN_ID", length = 3)
	@GeneratedValue(generator = "ADMINLOGIN_SEQ")
	@SequenceGenerator(name = "ADMINLOGIN_SEQ", sequenceName = "ADMINLOGIN_SEQ", allocationSize = 1)
	private Integer loginId;
	
	@Column(name = "USERNAME", length = 50)
	private String username;
	
	@Column(name = "PASSWORD", length = 30)
	private String password;
	
	@OneToOne(mappedBy = "adminLogin")
	private Admin admin;

	public AdminLogin() {
		super();
	}

	public AdminLogin(String username, String password, Admin admin) {
		super();
		this.username = username;
		this.password = password;
		this.admin = admin;
	}

	public AdminLogin(Integer loginId, String username, String password, Admin admin) {
		super();
		this.loginId = loginId;
		this.username = username;
		this.password = password;
		this.admin = admin;
	}

	public Integer getLoginId() {
		return loginId;
	}

	public void setLoginId(Integer loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	@JsonBackReference
	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	
	
}
