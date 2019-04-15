package com.moh.restaurant.service.impl;

import com.moh.restaurant.dao.UserRepository;
import com.moh.restaurant.entities.User;
import com.moh.restaurant.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final Logger log = LoggerFactory.getLogger(UserService.class);


    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;

    }

    @Override
    public List<User> getAll() {
        log.debug("Request to retrieve all the users  : { userRepository.findAll()}");
        return userRepository.findAll();
    }

    @Override
    public void add(User user) {
        log.debug("Request to add the user  : { user }");
        userRepository.save(user);
    }

    @Override
    public void update(User user) {
        log.debug("Request to update the user  : { user }");
        userRepository.save(user);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete the user of id  : { id }");
        userRepository.deleteById(id);
    }

    @Override
    public void saveAll(Iterable<User> iterable) {

        log.debug("Request to add an interable of the users  : { userRepository.findAll()}");
        userRepository.saveAll(iterable);
    }

    @Override
    public User get(Long id) {
        return null;
    }
}
