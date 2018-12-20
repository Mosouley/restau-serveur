package com.moh.restaurant.service.impl;


import com.moh.restaurant.dao.RoleRepository;
import com.moh.restaurant.dao.UserRepository;
import com.moh.restaurant.entities.User;
import com.moh.restaurant.error.UserAlreadyExistException;
import com.moh.restaurant.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
// @Primary
@Transactional
public class UserService implements ICrudService<User, Long> {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public User registerNewUserAccount(final User accountDto) {
        if (userNameExist(accountDto.getUsername())) {
            throw new UserAlreadyExistException("There is an account with that email adress: " + accountDto.getEmail());
        }
        final User user = new User();

        user.setUsername(accountDto.getUsername());
        user.setLastName(accountDto.getLastName());
        user.setPassword(passwordEncoder.encode(accountDto.getPassword()));
        user.setEmail(accountDto.getEmail());
        user.setRoles(Arrays.asList(roleRepository.findByName("ROLE_USER")));
        return userRepository.save(user);
    }
	
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

	public User findUserByEmail(final String userName) {
        return userRepository.findByUsername(userName);
	}
	
	private boolean userNameExist(final String userName) {
        return userRepository.findByUsername(userName) != null;
	}
	
    public Optional<User> getUserByID(final long id) {
        return userRepository.findById(id);
    }

    
    public void changeUserPassword(final User user, final String password) {
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
    }

}
