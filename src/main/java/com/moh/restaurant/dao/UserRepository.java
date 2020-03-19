package com.moh.restaurant.dao;


import javax.transaction.Transactional;

import com.moh.restaurant.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	// check if user name already is present in the data base
	boolean existsByUsername(String userName);

	// look for a user based on his username
	User findByUsername(String username);

	// check if a user email already exist
    Boolean existsByEmail(String email);

	//delete a user thru his name
	@Transactional
	void deleteByUsername(String username);

}
