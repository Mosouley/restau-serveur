package com.moh.restaurant.service;

public interface ICrudService<T> {

	Iterable<T> getAll();
	T get(Long id);
	void add(T entity);
	
	void update(T entity);
	
	void delete(Long id);
	
	void saveAll(Iterable<T> iterable);
}
