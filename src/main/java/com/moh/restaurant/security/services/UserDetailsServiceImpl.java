package com.moh.restaurant.security.services;



import com.moh.restaurant.entities.User;
import com.moh.restaurant.dao.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserDetailsService userDetailsService;
    
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userName)
            throws UsernameNotFoundException {

        User user = userRepository.findByUsername(userName)
                  .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found with -> username or email : " + userName)
        );

        return UserPrinciple.build(user);
    }
}
