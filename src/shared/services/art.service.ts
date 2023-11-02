import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArtService {
  splice: any;
 constructor(private http:HttpClient) {
  }

  fetchApi(pageNo: number):Observable<any>{
    return this.http.get(`https://api.artic.edu/api/v1/artworks?page=${pageNo}`);
  }

  fetchDataById(id: number): Observable<any>{
    return this.http.get(`https://api.artic.edu/api/v1/artworks/${id}`);
  }

  fetchDataBySearch(str: string): Observable<any>{
    return this.http.get(`https://api.artic.edu/api/v1/artworks/search?q=${str}`);
  }
 
  wishlisted: Array<any> =[];

  addToWishlist(item : any){

    let storage = JSON.parse(localStorage.getItem('wishlist') || '[]');

    storage.push(item);

    localStorage.setItem('wishlist', JSON.stringify(storage));
    alert('Item added');
    console.log(storage);
  
    
    // this.wishlisted.push(item);

  }

  getWishlist(){
    let lc = localStorage.getItem('wishlist');
    if (lc) {
      this.wishlisted = JSON.parse(lc);
    }
    return this.wishlisted;
  }

  

  

}

 