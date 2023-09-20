import { Component, OnInit } from '@angular/core';
import { Game, GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.games = this.gamesService.getGames();
  }
}
