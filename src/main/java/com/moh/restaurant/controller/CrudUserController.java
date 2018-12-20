package com.moh.restaurant.controller;

import java.util.Arrays;
import java.util.List;

import com.moh.restaurant.dao.RoleRepository;
import com.moh.restaurant.entities.Role;
import com.moh.restaurant.entities.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/crud_user")
public class CrudUserController extends CrudController<User, Long> {
		
	@Autowired
	private RoleRepository roleRepository;
	
	public List<User> getAll() {
		List<User> users = super.getAll();
		users.forEach(user -> user.setPassword(null));
		return users;
	}
	
	public void add(@RequestBody User user) {
		Role role = roleRepository.findByName("ROLE_USER");
		user.setRoles(Arrays.asList(role));
		user.setEnable(true);
		super.add(user);
	}
}
