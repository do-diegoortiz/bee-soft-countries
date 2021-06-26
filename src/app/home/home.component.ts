import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public queryParams(): void {
    this.router.navigate(['countries'])
    // this.router.navigate(['countries'], { queryParams: { name: 'colombia' } })
  }

  public iniciarSesion(): void {
    localStorage.setItem('authenticated', 'true')
  }

  public cerrarSesion(): void {
    localStorage.setItem('authenticated', 'false')
  }
}
