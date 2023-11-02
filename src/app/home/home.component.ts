import { Component } from '@angular/core';
import { ArtService } from 'src/shared/services/art.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  artData: Array<any> = [];
  currentPage = 1;
  searchForm : FormGroup;
  
 
  constructor(private art: ArtService, private fb:FormBuilder){
    this.searchForm = this.fb.group({
      searchInput: ''
    });

    this.searchForm.get('searchInput')?.valueChanges.subscribe((value) => {
      if (value) {
        this.art.fetchDataBySearch(value).subscribe((response: any) => {
          console.log(response);
          this.artData = response?.data;
        });
      } else {
        this.getData();
      }
    });
  }

  

  ngOnInit(): void {
    this.getData();
    
   }
   
 
   getData(){
     console.log('fetching data');
     this.art.fetchApi(this.currentPage).subscribe((response: any) => {
       console.log(response);
       this.artData = response?.data;
     });
   }
 
   prev(): void{
     console.log('prev')
     if(this.currentPage > 1){
       this.currentPage -= 1;
     }
     this.getData();
   }
   
   next(){
     console.log('next');
     this.currentPage += 1;
     this.getData();
   }

   addToWishlist(item : any){
     this.art.addToWishlist(item);
   }

      
}
