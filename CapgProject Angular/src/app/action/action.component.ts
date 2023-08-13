import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/service/favorite.service';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

books:any=[{
  "name":'The Three Musketeers',
  "description":'In this classic by Dumas, a young man named d’Artagnan joins the Musketeers of the Guard. In doing so, he befriends Athos, Porthos, and Aramis — the King’s most celebrated musketeers — and embarks on a journey of his own.',
  "imageUrl":"../../assets/1.jpg"
},
{
  "name":'Treasure Island',
  "description":'Written by Scottish author Robert Louis Stevenson, this story of “buccaneers and buried gold” launched a million tropes of treasure maps, sea chests, Black Spots, and deserted islands.',
  "imageUrl":"../../assets/2.jpg"
},
{
  "name":'Journey to the Center of the Earth',
  "description":'Journey to the Center of the Earth is exactly that: a trip to the inside of the world, which is where German professor Otto Lidenbrock theorizes that volcanic tubes will lead. Another one of Jules Verne’s magnum opuses — and one of the most famous examples of subterranean fiction.',
  "imageUrl":"../../assets/3.jpg"
},
{
  "name":'The Count of Monte Cristo',
  "description":'Part adventure story and part revenge thriller, The Count of Monte Cristo is the tale of Edmond Dantès, a man who is falsely imprisoned without trial in an island fortress off France. That is, until one day he escapes and seeks out the men who conspired against him. You’ll find yourself coming for the adventure, but staying for the vindication.',
  "imageUrl":"../../assets/4.jpg"
},
{
  "name":'Ivanhoe by Walter Scott',
  "description":'First published in 1819, Ivanhoe is a tale of heroism set in 12th-century England after the failure of the Third Crusade. Looking for jousting tournaments, romance, kidnappings, and witch trials? Then you’ve come to the right book.',
  "imageUrl":"../../assets/5.jpg"
}];



  constructor(private favoriteService : FavoriteService) {}

  ngOnInit(): void {

    
  }
addtofavorite(item : any){
this.favoriteService.addtoFavorite(item);
}
}
