import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  tarjetas: any[] = [
    {
      id: "1",
      nombre: 'Pikachu',
      imagen: '/assets/pikachu.png',
      categoria: 'Ratón',
      tipo: 'Eléctrico',
      talla: '0.40',
      peso: '6.00'
    },
    {
      id: "2",
      nombre: 'Squirtle',
      imagen: '/assets/squirtle.png',
      categoria: 'Tortuguita',
      tipo: 'Agua',
      talla: '0.50',
      peso: '9.00'
    },
    {
      id: "3",
      nombre: 'Bulbasaur',
      imagen: '/assets/bulbasaur2.png',
      categoria: 'Semilla',
      tipo: 'Planta',
      talla: '0.70',
      peso: '6.90'
    },
    {
      id: "4",
      nombre: 'Charmander',
      imagen: '/assets/charmander.png',
      categoria: 'Lagartija',
      tipo: 'Fuego',
      talla: '0.60',
      peso: '8.50'
    },
    {
      id: "5",
      nombre: 'Ekans',
      imagen: '/assets/ekans.png',
      categoria: 'Serpiente',
      tipo: 'Veneno',
      talla: '2.00',
      peso: '6.90'
    },
    {
      id: "6",
      nombre: 'Jigglypuff',
      imagen: '/assets/jigglypuff.png',
      categoria: 'Globo',
      tipo: 'Hada',
      talla: '0.50',
      peso: '5.50'
    },
    {
      id: "7",
      nombre: 'Pidgey',
      imagen: '/assets/pidgey.png',
      categoria: 'Pajarito',
      tipo: 'Volador',
      talla: '0.30',
      peso: '1.80'
    },
    {
      id: "8",
      nombre: 'Rattata',
      imagen: '/assets/rattata.png',
      categoria: 'Ratón',
      tipo: 'Normal',
      talla: '0.30',
      peso: '3.50'
    }
  ];

  constructor(){} 
  ngOnInit(){}
}
