import { Component, OnInit } from '@angular/core';
import { ICartoon } from '../interfaces';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css'],
})
export class CartoonsComponent implements OnInit {
  cartoons: ICartoon[] = [];

  cartoon = {
    habilidad: '',
    debilidad: '',
    monacho: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public enviar(): void {
    const copy = { ...this.cartoon };
    this.cartoons.push(copy);
  }
}
