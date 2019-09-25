// package com.moh.restaurant.service;


// import java.util.List;

// import javax.servlet.http.HttpServletRequest;

// import com.moh.restaurant.dao.UserRepository;
// import com.moh.restaurant.entities.User;

// import com.moh.restaurant.security.JwtTokenProvider;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;
// import com.moh.restaurant.exception.CustomException;

// @Service
// // @Primary
// // @Transactional
// public class UserService {

//   @Autowired
//   private UserRepository userRepository;

//   @Autowired
//   private PasswordEncoder passwordEncoder;

//   @Autowired
//   private JwtTokenProvider jwtTokenProvider;
  
//     @Autowired
//     private AuthenticationManager authenticationManager;
  
    
//     public List<User> getAll(){
//       return userRepository.findAll();
//     }

// }
