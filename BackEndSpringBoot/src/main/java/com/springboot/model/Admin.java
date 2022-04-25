package com.springboot.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "ADMIN")
public class Admin {
	@Id
	@Column(name = "ADMIN_ID", length = 3)
	@GeneratedValue(generator = "ADMIN_SEQ")
	@SequenceGenerator(name = "ADMIN_SEQ", sequenceName = "ADMIN_SEQ", allocationSize = 1)
	private Integer adminId;
	
	@Column(name = "ADMIN_NAME", length = 40)
	private String adminName;
	
	@Column(name = "AGE", length = 3)
	private int age;
	
	@Column(name = "MOBILE_NUMBER", length = 12)
	private long mobileNumber;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "LOGIN_ID")
	private AdminLogin adminLogin;
	
	public Admin() {
		super();
	}

	public Admin(String adminName, int age, long mobileNumber, AdminLogin adminLogin) {
		super();
		this.adminName = adminName;
		this.age = age;
		this.mobileNumber = mobileNumber;
		this.adminLogin = adminLogin;
	}

	public Admin(Integer adminId, String adminName, int age, long mobileNumber, AdminLogin adminLogin) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.age = age;
		this.mobileNumber = mobileNumber;
		this.adminLogin = adminLogin;
	}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	@JsonManagedReference
	public AdminLogin getAdminLogin() {
		return adminLogin;
	}

	public void setAdminLogin(AdminLogin adminLogin) {
		this.adminLogin = adminLogin;
	}
	
	
}
