package com.example.CapgProject.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.CapgProject.dto.Book;
import com.example.CapgProject.service.BookService;

@Service
public class BookServiceImpl implements BookService {

	public static List<Book> BList=new ArrayList();
	
	BookServiceImpl(){
		
		Book b=new Book();
		b.setName("North and South");
		b.setDescription("This classic fish-out-of-water tale follows Margaret, a nineteen-year-old girl whose life is turned upside down when her family relocates from a sleepy village to Darkshire — a rough and restless industrial town in the north of England. ");
		BList.add(b);
		b=new Book();
		b.setName("Pride and Prejudice");
		b.setDescription("It is a truth universally acknowledged that any list of the best romance novels must be in want of at least one Jane Austen title (we’ve gone for three!). And Pride and Prejudice is by far the English humorist’s most famous story. It’s a tale as old as time: boy meets girl; boy and girl bicker and declare their contempt for one another;");
		BList.add(b);
		b=new Book();
		b.setName("Emma ");
		b.setDescription("Austen once set out in a letter the perfect subject for a novel — “Three or four families in a country village” — and the description fits Emma well. The glue that holds these families together (and our beloved heroine) is Emma Woodhouse. Clever, rich, beautiful, and utterly deluded, she’s determined to meddle with the hearts of her neighbours, but sees no need to find a husband herself.");
		BList.add(b);
		
	}
	
	@Override
	public List<Book> getBook() {
       return BList;
	}

	@Override
	public List<Book> saveBook(List<Book> book) {
		
		BList.addAll(book);
		return book;
	}

	@Override
	public void deleteBook(String name)
	{
		int indx=0;
		for(int i=0;i<BList.size();i++)
		{
			if(BList.get(i).getName().equals(name))
			{
				indx=i;
			}
		}
		BList.remove(indx);
		
	}
	
	

}
