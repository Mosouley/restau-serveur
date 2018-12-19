package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.UserRepository;
import com.moh.restaurant.entities.User;
import com.moh.restaurant.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Primary
public class UserService implements ICrudService<User, Long> {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAll() {
		return userRepository.findAll();
	}

	@Override
	public void add(User user) {
		userRepository.save(user);
	}

	@Override
	public void update(User user) {
		userRepository.save(user);
	}

	@Override
	public void delete(Long id) {
		User user = new User();
		user.setId(id);
		userRepository.delete(user);
	}

	@Override
	public void saveAll(Iterable<User> iterable) {
		userRepository.saveAll(iterable);
	}

}
