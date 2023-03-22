import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  model: any;

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id') != null) {
      this.playerService.getPlayer(this.route.snapshot.paramMap.get('id')).
      subscribe({next: r => this.model = r, error: e => console.log(e)});
    } else{
      this.model = {id: null, name: null, race: null, pclass: null, level: null, server: null};
    }
  }

  onSubmit(): void {
    if(this.model.id) {
      this.playerService.updatePlayer(this.model.id, this.model).
        subscribe(
          {
            next: r => this.router.navigate(['/']),
            error: e => console.log(e)
          }
        );
    } else {
      this.playerService.createPlayer(this.model).
        subscribe({next: r => this.router.navigate(['/']), error: e => console.log(e)});
       
    }

  }

}
