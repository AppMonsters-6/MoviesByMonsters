package com.springboot.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.springboot.model.User;
import com.springboot.model.UserLogin;
import com.springboot.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public Object insert(User u) {
		/*
		 * if(repository.existsById(u.getUserId())) { return HttpStatus.FOUND; } return
		 * HttpStatus.NOT_FOUND;
		 */
		repository.save(u);
		return HttpStatus.CREATED;
	}

	public Object update(User u) {
		Optional<User> o = repository.findById(u.getUserId());
		if (o.isPresent()) {
			repository.save(u);
			return HttpStatus.OK;
		}
		return HttpStatus.NOT_FOUND;
	}

	public Object delete(Integer id) {
		if (repository.existsById(id)) {
			repository.deleteById(id);
			return HttpStatus.OK;
		}
		return HttpStatus.NOT_FOUND;
	}

	public Object findById(Integer id) {
		Optional<User> o = repository.findById(id);
		if (o.isPresent()) {
			return HttpStatus.FOUND;
		}
		return HttpStatus.NOT_FOUND;
	}

	public String find(String email) {
		User u = repository.findByEmailId(email);
		String str = null;
		if(u == null) {
			str="NOT FOUND";
		} else {
			str = u.getUserLogin().getPassword();
		}
		String fmt=String.format("{\"text\": \"%s\"}", str);
//		System.out.println(u);
//		if(u != null) {
//			return u.getUserLogin().getPassword();
//		}
//		return null;
		return fmt;
	}
}
