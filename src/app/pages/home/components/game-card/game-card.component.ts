import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() gameData: Game = {
    id: '',
    title: '',
    description: '',
    coverImageUrl: '',
    price: '',
    platform: '',
    format: '',
  };

  cardImageStyle = {};

  ngOnInit() {
    this.cardImageStyle = {
      background: 'url(' + this.gameData.coverImageUrl + ')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center',
    };
  }
}
