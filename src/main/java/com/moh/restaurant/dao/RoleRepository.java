package com.moh.restaurant.dao;


import java.util.Optional;

import com.moh.restaurant.entities.Role;
import com.moh.restaurant.entities.RoleName;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Optional<Role> findByName(RoleName roleName);
}
