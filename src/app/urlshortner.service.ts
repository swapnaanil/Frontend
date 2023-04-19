import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UrlshortnerService {
  serviceUrl : string = '';
  constructor(private http : HttpClient) { 
    this.serviceUrl = "http://localhost:8080/url/shortner";
 
}
getShortUrl(url : string) {
  return this.http.post<any>(this.serviceUrl,url);
}
}
