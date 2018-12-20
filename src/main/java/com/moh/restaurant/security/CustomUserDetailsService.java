package com.moh.restaurant.security;


import com.moh.restaurant.dao.RoleRepository;
import com.moh.restaurant.dao.UserRepository;
import com.moh.restaurant.entities.Privilege;
import com.moh.restaurant.entities.Role;
import com.moh.restaurant.entities.User;
import com.moh.restaurant.service.impl.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Service("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserService Service;
	@Autowired
    private MessageSource messages;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = userRepository.findByUsername(username);
		
		boolean accountNonExpired = true; 
		boolean credentialsNonExpired = true; 
		boolean accountNonLocked = true;
		
		// UserDetails userDetails = new org.springframework.security.core.userdetails.User(
		// 		username, 
		// 		user.getPassword(), 
		// 		user.isEnable(), 
		// 		accountNonExpired, 
		// 		credentialsNonExpired, 
		// 		accountNonLocked, 
		// 		getAuthorities(Arrays.asList(
		// 			roleRepository.findByName("ROLE_USER")
		// 		)));
		
		// return userDetails;
		if (user == null) {
            return new org.springframework.security.core.userdetails.User(
              " ", " ", true, true, true, true, 
              getAuthorities(Arrays.asList(
                roleRepository.findByName("ROLE_USER"))));
        }
 
        return new org.springframework.security.core.userdetails.User(
          user.getEmail(), user.getPassword(), user.isEnable(), true, true, 
          true, getAuthorities(user.getRoles()));
	}
	
	// private Collection<? extends GrantedAuthority> getAuthorities(List<Role> roles) {
	// 	Collection<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
	// 	for (Role role: roles) {
	// 		GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(role.getName());
	// 		grantedAuthorities.add(grantedAuthority);
	// 	}
	// 	return grantedAuthorities;
	// }

	private Collection<? extends GrantedAuthority> getAuthorities(
      Collection<Role> roles) {
  
        return getGrantedAuthorities(getPrivileges(roles));
    }
 
    private List<String> getPrivileges(Collection<Role> roles) {
  
        List<String> privileges = new ArrayList<>();
        List<Privilege> collection = new ArrayList<>();
        for (Role role : roles) {
            collection.addAll(role.getPrivileges());
        }
        for (Privilege item : collection) {
            privileges.add(item.getName());
        }
        return privileges;
    }
 
    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges) {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}
