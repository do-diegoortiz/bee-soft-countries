import { Component, OnInit } from '@angular/core';
import { ICountry } from '../interfaces';
import { CountryService } from '../services';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public countries: ICountry[] = []

  myCountry: ICountry = {
    name: '',
    capital: '',
    forKids: ''
  }

  constructor(private readonly _countriesService: CountryService) { }

  ngOnInit(): void {
    this._countriesService.getCountries().subscribe(data => {
      if (data) {
        this.countries = data.slice(0, 20)
      }
    });
  }

  public enviar(): void {
    console.log(this.myCountry)
    const copy = {...this.myCountry}
    this.countries.push(copy)
  }
}
