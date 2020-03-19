package com.moh.restaurant.dao;

import com.moh.restaurant.entities.Appro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApproRepository extends JpaRepository<Appro, Long> {

}
