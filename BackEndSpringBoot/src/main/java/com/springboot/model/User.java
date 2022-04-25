package com.springboot.model;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.springboot.util.JsonDate;

@Entity
@Table(name = "USERS")
public class User {
	@Id
	@Column(name = "USER_ID", length = 3)
	@GeneratedValue(generator = "USER_SEQ")
	@SequenceGenerator(name = "USER_SEQ", sequenceName = "USER_SEQ", allocationSize = 1)
	private Integer userId;

	@Column(name = "NAME", length = 40)
	private String name;

	@Column(name = "PHONE_NUMBER", length = 12)
	private Long phoneNumber;

	@Column(name = "USER_DOB")
	@JsonDeserialize(using = JsonDate.class)
	private Date dob;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "LOGIN_ID")
	private UserLogin userLogin;

	public User() {
		super();
	}

	public User(String name, Long phoneNumber, Date dob, UserLogin userLogin) {
		super();
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.dob = dob;
		this.userLogin = userLogin;
	}

	public User(Integer userId, String name, Long phoneNumber, Date dob, UserLogin userLogin) {
		super();
		this.userId = userId;
		this.name = name;
		this.phoneNumber = phoneNumber;
		this.dob = dob;
		this.userLogin = userLogin;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	@JsonManagedReference
	public UserLogin getUserLogin() {
		return userLogin;
	}

	public void setUserLogin(UserLogin userLogin) {
		this.userLogin = userLogin;
	}
	
	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", phoneNumber=" + phoneNumber + ", dob=" + dob
				+ ", userLogin=" + userLogin + "]";
	}

}
