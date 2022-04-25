package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "USERLOGIN")
public class UserLogin {
	@Id
	@Column(name = "LOGIN_ID", length = 3)
	@GeneratedValue(generator = "USERLOGIN_SEQ")
	@SequenceGenerator(name = "USERLOGIN_SEQ", sequenceName = "USERLOGIN_SEQ", allocationSize = 1)
	private Integer loginId;
	
	@Column(name = "EMAIL_ID", length = 50)
	private String email;

	@Column(name = "PASSWORD")
	private String password;

	@OneToOne(mappedBy = "userLogin", fetch = FetchType.EAGER)
	private User user;

	public UserLogin() {
		super();
	}

	public UserLogin(String email, String password, User user) {
		super();
		this.email = email;
		this.password = password;
		this.user = user;
	}

	public UserLogin(Integer loginId, String email, String password, User user) {
		super();
		this.email = email;
		this.loginId = loginId;
		this.password = password;
		this.user = user;
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
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserLogin [loginId=" + loginId + ", email=" + email + ", password=" + password + "]";
	}
	
	

}
