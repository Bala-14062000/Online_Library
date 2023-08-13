import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  books:any=[{
    "name":'Jane Eyre',
    "description":'aThough Jane Eyre might be ‘poor, obscure, plain and little’, her love story is anything but. One of the authoritative classics of the genre, Jane Eyre’s enduring popularity is testament to the power of its central romance. Jane, a destitute young orphan, arrives at the home of the mysterious Mr Rochester in search of employment, but finds far more than she bargained for. ',
    "imageUrl":"../../assets/9.jpg"
  },
  {
    "name":'Anna Karenina',
    "description":'A sprawling epic that takes readers across continents in the name of love, Anna Karenina is one of the longest books on this list, coming to an intimidating 800+ pages. But those who persevere with this colossus of a novel are richly rewarded. In what is considered by many to be the best romance novel of all time',
    "imageUrl":"../../assets/10.jpg"
  },
  {
    "name":'Love in the Time of Cholera',
    "description":'Florentino Ariza has been waiting for 50 years for his true love to return. That’s not to say he’s been bored: he’s passed the time by having no fewer than 622 love affairs, which he has painstakingly recorded in his notebooks. Despite his dalliances and the passing of decades, when the man who married his childhood sweetheart dies,',
    "imageUrl":"../../assets/12.jpg"
  },
  ];
  boo:any=[]
  constructor(private favoriteService : FavoriteService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBook().subscribe( data => {
      this.boo = data;
    },
    (error) => {
      this.boo = error.message;
    });

  }
  addtofavorite(item : any){
    this.favoriteService.addtoFavorite(item);
    }

    saveBook(dormData:any){
      const data:any=[];

      this.dataService.saveBook(data);
    }
}
