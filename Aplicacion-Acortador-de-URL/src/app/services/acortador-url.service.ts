import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcortadorUrlService {

  url='https://api-ssl.bitly.com/v4/shorten'
  token = '00bdb4bae0ccde68c0ba65b97c6b10c623f21918'
  
  constructor(private http:HttpClient) { }
}
