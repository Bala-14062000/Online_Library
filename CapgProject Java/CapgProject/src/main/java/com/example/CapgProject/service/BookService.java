package com.example.CapgProject.service;

import java.util.List;

import com.example.CapgProject.dto.Book;

public interface BookService {
	public List<Book> getBook();

	public List<Book> saveBook(List<Book> book);

	public void deleteBook(String name);

}
