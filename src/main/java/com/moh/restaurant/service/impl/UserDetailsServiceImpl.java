package com.moh.restaurant.service.impl;



import com.moh.restaurant.entities.User;
import com.moh.restaurant.entities.UserPrinciple;
import com.moh.restaurant.dao.UserRepository;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;

    public UserDetailsServiceImpl( UserRepository userRepository) {
      this.userRepository = userRepository;
    }


   @Transactional
    @Override
    public UserDetails loadUserByUsername(String userName)
            throws UsernameNotFoundException {
        // org.springframework.security.core.userdetails.User

       User  user = userRepository.findByUsername(userName);
       if  (user == null) {
        return (UserDetails) new UsernameNotFoundException("User Not Found with -> username or email : " + userName);
       } else {
         return UserPrinciple.build(user);
       }

    }
}
