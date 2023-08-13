import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit {

  book : any=[];
  constructor(private favoriteService : FavoriteService) { }

  ngOnInit(): void {
    this.favoriteService.getBooks()
    .subscribe(res=>{
      this.book=res;
    })
  }
  remove(item :any){
this.favoriteService.removeItem(item);
  }
}
