package com.moh.restaurant.controller;

import java.util.List;

import com.moh.restaurant.error.ResourceNotFoundException;
import com.moh.restaurant.service.ICrudService;
import com.moh.restaurant.util.HeaderUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class CrudController<T> {

	@Autowired
	private ICrudService<T> service;
	private static final String ENTITY_NAME = "entity";
//	public CrudController() {
//	}
//
//	public  CrudController(ICrudService<T> service){
//		this.service =service;
//	}

	@GetMapping
	public Iterable<T> getAll(){
		return service.getAll();
	}
	@GetMapping("/{id}")
	public ResponseEntity<T> get(@PathVariable Long id) 
	throws ResourceNotFoundException{
		T  t=service.get(id);
		
		return ResponseEntity.ok().body(t);
	}
	
	@PostMapping
	public void add(@RequestBody T entity) {
		service.add(entity);
	}
	
	@PutMapping
	public ResponseEntity<T> update( @RequestBody T entity) throws ResourceNotFoundException {
		service.update(entity);
		return ResponseEntity.ok(entity);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws ResourceNotFoundException {
		service.delete(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/all")
	public ResponseEntity<List<T>> addAll(@RequestBody List<T> list) {
		service.saveAll(list);
		return new ResponseEntity<>(list, HttpStatus.ACCEPTED);
	}
}
