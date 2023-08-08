import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent {
  @Input()
  public gif! : Gif
}
