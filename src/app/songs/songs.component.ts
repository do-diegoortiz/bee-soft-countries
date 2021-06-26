import { Component, OnInit } from '@angular/core';
import { ISong } from '../interfaces';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public songs: ISong[] = [];

  newSong = {
    name: '',
    artist: '',
    forKids: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  enviar():void {
    const copy = {...this.newSong}
    this.songs.push(copy)
  }
}
