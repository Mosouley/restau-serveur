package com.moh.restaurant.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.moh.restaurant.error.ResourceNotFoundException;
import com.moh.restaurant.service.ICrudService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


public class CrudController<T> {

	 @Autowired
	private ICrudService<T> service;
  private static final Logger logger = LoggerFactory.getLogger(CrudController.class);
	private static final String ENTITY_NAME = "entity";

	@GetMapping
	public Iterable<T> getAll(){
		return service.getAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<T>> get(@PathVariable Long id)
	throws ResourceNotFoundException {
		Optional<T> t= service.get(id);
		return ResponseEntity.ok(t);
	}

	@PostMapping
	public ResponseEntity<T> add(@RequestBody @Valid T entity) {
    service.add(entity);
		 return ResponseEntity.ok(entity);
	}

	@PutMapping
	public @ResponseBody ResponseEntity<@Valid T> update(@RequestBody @Valid T entity) throws ResourceNotFoundException {

    // T t= service.get(ENTITY_NAME['id']).orElse(null);
    //  if (t == null) {
    //  return add(t);
    //  } else {
       service.update(entity);
    //  }

		return ResponseEntity.ok(entity);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws ResourceNotFoundException {

    service.delete(id);
		return ResponseEntity.ok().build();
	}

	@PostMapping("/all")
	public ResponseEntity<List<T>> addAll(@Valid @RequestBody List<T> list) {
    // List<T>  maListe = Arrays.asList(list);
    logger.error("Unauthorized error. Message - {}");
		return new ResponseEntity<>(list, HttpStatus.ACCEPTED);
	}
}
