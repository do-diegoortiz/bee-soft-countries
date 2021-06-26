# BeeSoft Countries & Posts

Proyecto creado con Angular 12.0.2.

## Desarrollo

Después de clonar el proyecto, corre `npm i` para instalar las librerías.

Corre `ng serve` o `npm start` para iniciar el proyecto

## Contenido

Este proyecto contiene dos componentes principales, el `CountryComponent` que consulta un listado de países, y en el que buscamos agregar un formulario para agregar más paises.

El otro componente es `BlogComponent` que consulta un listado de blog posts de prueba. Aquí también tendremos oportunidad de crear un formulario para agregar, editar y eliminar posts.


<!-- <form #myLittleForm="ngForm" (ngSubmit)="enviar()">
  <input type="text" class="ng-pristine" [(ngModel)]="newCountry.name" placeholder="Nombre" name="name" #name="ngModel"/>
  <span [hidden]="name.dirty">Name is required</span>
  <input type="text" [(ngModel)]="newCountry.capital" placeholder="Capital" name="capital" required/>
  <button type="submit" [disabled]="myLittleForm.form.invalid">Enviar</button>
</form>

<ul>
  <li *ngFor="let country of countries">{{ country.name }} | {{ country.capital }}</li>
</ul> -->
