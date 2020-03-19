package com.moh.restaurant.service;

import java.util.Optional;

import org.springframework.stereotype.Component;


@Component
public interface ICrudService<T> {

	Iterable<T> getAll();
	Optional<T> get(Long id);
	void add(T entity);

	void update(T entity);

  void delete(Long id);

  void saveAll( Iterable<T> list);
}
