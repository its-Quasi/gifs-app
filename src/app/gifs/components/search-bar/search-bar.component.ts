import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-bar',
  template: `
    <h5>Search</h5>
    <input type="text"
    class = "form-control"
    placeholder="Search Gifs..."
    (keyup.enter)="searchTag()"
    #txtSearchGif
    >
  `,
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private gifsService : GifsService){}

  @ViewChild('txtSearchGif') //local reference
  public inputSearchHTML! : ElementRef<HTMLInputElement> ;

  searchTag() : void {
    const newTag : string = this.inputSearchHTML.nativeElement.value
    this.gifsService.searchTag(newTag)
    this.inputSearchHTML.nativeElement.value = ''
  }
}
