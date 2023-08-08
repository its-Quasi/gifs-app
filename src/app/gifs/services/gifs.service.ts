import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifs : Gif[] = []

  constructor(private http : HttpClient) {}

  private _tagHistory : string[] = []
  private apikey : string = 'OL4AtR0QXbs8p2DeYslHbdzLUuekupKO'
  private serviceUrl : string = 'https://api.giphy.com/v1/gifs'

  get tagHistory() : string[]  {
    return [...this._tagHistory]
  }

  private verifyTag(tag : string) : void {
    tag = tag.toLowerCase()
    this._tagHistory = this._tagHistory.filter( e => e.toLowerCase() !== tag )
    this._tagHistory.unshift(tag)
    this._tagHistory = this._tagHistory.slice(0, 10) //get last ten elements
  }

  public searchTag(tag : string) : void {
    if(tag.length === 0) return
    this.verifyTag(tag)

    const params = new HttpParams()
      .set('api_key' , this.apikey)
      .set('q', tag)
      .set('limit', '10')

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(response => this.gifs = response.data)
  }

}
