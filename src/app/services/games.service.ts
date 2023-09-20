import { Injectable } from '@angular/core';
import { games } from '../data/games';

export type Game = {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  price: string;
  platform: string;
  format: string;
  badge?: string;
};

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor() {}

  getGames(): Game[] {
    const gamesPriceFormatted: Game[] = [];
    games.forEach((value) => {
      const newPrice = this.formatPrice(value.price);
      gamesPriceFormatted.push({ ...value, price: newPrice });
    });

    return gamesPriceFormatted;
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }
}
