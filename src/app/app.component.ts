import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ArtService } from 'src/shared/services/art.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'miniProject';
  artData: Array<any> = [];
  subscriptions:any
  isLoading=true
  pageSize = 12;
  currentPage = 1;
  

  constructor(private art: ArtService, private fb : FormBuilder){}

  ngOnInit(): void {

   this.getData();
   
  }

  // ngOnDestroy(): void {
  //  this.subscriptions.unsubscribe()
  // }
  
  getData(){
    console.log('fetching data');
    this.art.fetchApi(this.currentPage).subscribe((response: any)   => {
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
  
}
  

  

