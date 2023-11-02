import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/shared/services/art.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent /* implements OnInit */ {

  wishlist: Array<any> = [];
  item : any
  constructor(private service: ArtService) {

    this.wishlist = this.service.getWishlist();
    console.log(this.wishlist);

    
    
  }
  removeFromWishlist(art: any) {
    let remainingItems = this.wishlist.filter((item : any) => 
    item !== art);
    console.log(remainingItems);
    localStorage.setItem('wishlist',JSON.stringify(remainingItems));
    this.wishlist = remainingItems;
  }

}



