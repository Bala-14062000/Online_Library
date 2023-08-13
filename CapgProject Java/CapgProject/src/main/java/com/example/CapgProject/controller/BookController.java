package com.example.CapgProject.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.CapgProject.dto.Book;
import com.example.CapgProject.service.BookService;

@RestController
@CrossOrigin("*")
public class BookController {
	@Autowired
	BookService bookservice;
	
	@GetMapping("/action")
	public List<Book> getBook(){
		List<Book> book=bookservice.getBook();
		
		return book;
	}
	
	@PostMapping("/action")
	public List<Book> saveBook(@RequestBody List<Book> book){
		return bookservice.saveBook(book);
		
	}
	@DeleteMapping("/action")
	public void deleteBook(@RequestParam("name") String name) {
		bookservice.deleteBook(name);
	}

}
