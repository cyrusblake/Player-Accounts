import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayerList() {
    return this.http.get<{}[]>('/api/v1/players');
  }

  getPlayer(id: any) {
    return this.http.get(`/api/v1/players/${id}`);
  }

  createPlayer(player: any) {
    return this.http.post('/api/v1/players', player);
  }

  updatePlayer(id: any, player: any) {
    return this.http.put(`/api/v1/players/${id}`, player);
  }

  deletePlayer(id: any) {
    return this.http.delete(`/api/v1/players/${id}`);
  }

}
