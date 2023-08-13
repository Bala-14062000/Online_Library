import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {


  books : any=[]
  public bookList =new BehaviorSubject<any>([]);

  constructor() { }
  getBooks(){
    return this.bookList.asObservable();
  }
  setBooks(book :any)
  {
    this.books.push(...book);
    this.bookList.next(book);
  }
  addtoFavorite(book : any)
  {
    this.books.push(book);
    this.bookList.next(this.books);
  }
  removeItem(book :any)
  {
    this.books.map((a:any,index:any)=>{
      if(book.id==a.id){
        this.books.splice(index,1);
      }
    })

  }
  removeAll(){
    this.books=[]
    this.bookList.next(this.books);
  }
}
