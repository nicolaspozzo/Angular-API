import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { 
    console.log('data service ready')    

  }

  getData(){
    //const URL:string = 'https://restcountries.eu/rest/v2/all';
    const URL:string ='https://restcountries.eu/rest/v2/lang/es';
    //const URL:string ='https://restcountries.eu/rest/v2/lang/en';
    //const URL:string ='https://restcountries.eu/rest/v2/region/europe';
    //const URL:string ='https://restcountries.eu/rest/v2/region/americas';
    return this.http.get<any>(URL);
  }

  getObject(code){
    console.log(code);
    const URL:string ='https://restcountries.eu/rest/v2/alpha/' + code;
    return this.http.get<any>(URL);
  }
}
