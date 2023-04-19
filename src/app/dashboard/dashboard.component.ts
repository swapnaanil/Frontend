import { Component, OnInit } from '@angular/core';
import { UrlshortnerService } from '../urlshortner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url : string = "";
  originalUrl :string = "";
  isUrlGenerated : boolean = false;
  isErrorGenerated : boolean = false;
  shortUrl : string ="";
  constructor(private urlShortnerService : UrlshortnerService) { }

  ngOnInit(): void {
    this.isUrlGenerated = false;
  }

  generateShortUrl() {
    this.urlShortnerService.getShortUrl(this.url).subscribe(res=>{
        if(res == null) {
        this.isErrorGenerated = true; 
      } else {
        this.isUrlGenerated = true;
        this.isErrorGenerated = false;
        this.shortUrl = res.shorturl;
        this.originalUrl = res.originalurl;
      }
    }, (err: any)=>{
      this.isUrlGenerated = false;
      this.isErrorGenerated = true;
    })
  }

}
