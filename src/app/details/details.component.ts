import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtService } from 'src/shared/services/art.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  artId: number = 0;
  artData: any;

  constructor(private route: ActivatedRoute, private art: ArtService){
    this.artId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
      this.art.fetchDataById(this.artId).subscribe((response: any) => {
        this.artData = response?.data;
      })
  }

  

}
