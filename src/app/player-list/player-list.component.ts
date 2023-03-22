import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  constructor(private playerService: PlayerService){}

  // TODO: Will be replaced by actual backend data later from spring

  players: any;

  selectedPlayer?: any;

  ngOnInit(): void{
    this.playerService.getPlayerList().
    subscribe({next: r => this.players = r, error: e => console.log(e)});
  }

  onSelect(player: any): void {
    this.selectedPlayer = player;
  }

  onDelete(player: any): void{
    this.playerService.deletePlayer(player.id).
    subscribe({next: r => this.ngOnInit(), error: e => console.log(e)});
  }

}
