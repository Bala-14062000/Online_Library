import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css']
})
export class ComedyComponent implements OnInit {

  books:any=[{
    "name":'Three Men in a Boat',
    "description":'“I did not intend to write a funny book at first,” said Jerome K. Jerome, a contemporary of iconic humourists Mark Twain and Oscar Wilde, after completing Three Men in a Boat, a novel that proves exceptional comic writing can age well. The story of three men taking a',
    "imageUrl":"../../assets/6.jpg"
  },
  {
    "name":'The Devil’s Dictionary',
    "description":'Ohio-born journalist Ambrose Bierce had a dazzling imagination – his 1889 short story Moxon’s Master predicted machines that think for themselves – and The Devil’s Dictionary remains one of the best satirical non-fiction books ever written. Bierce originall',
    "imageUrl":"../../assets/7.jpg"
  },
  {
    "name":'The Good Soldier Švejk ',
    "description":'aJoseph Heller admitted he could not have written Catch-22 without first reading Jaroslav Hašek’s subversive masterpiece The Adventures of The Good Soldier Švejk. Czech writer Hašek, who died of heart failure at 39, created a comic Everyman with the hapless W',
    "imageUrl":"../../assets/8.jpg"
  },
  ];
  constructor(private favoriteService : FavoriteService) { }

  ngOnInit(): void {
  }
  addtofavorite(item : any){
    this.favoriteService.addtoFavorite(item);
    }
}
