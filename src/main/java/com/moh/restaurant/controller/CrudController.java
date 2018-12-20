package com.moh.restaurant.controller;

import java.util.List;

import javax.annotation.Resource;

import com.moh.restaurant.service.ICrudService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class CrudController<T, ID> {

	@Autowired
	private ICrudService<T, ID> service;
	
	@GetMapping
	public List<T> getAll(){
		return service.getAll();
	}
	
	@PostMapping
	public void add(@RequestBody T entity) {
		service.add(entity);
	}
	
	@PutMapping
	public void update(@RequestBody T entity) {
		service.update(entity);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable ID id) {
		service.delete(id);
	}
	
	@PostMapping("/all")
	public ResponseEntity<List<T>> addAll(@RequestBody List<T> list) {
		service.saveAll(list);
		return new ResponseEntity<>(list, HttpStatus.ACCEPTED);
	}
}
