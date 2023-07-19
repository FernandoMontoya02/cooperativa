import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Heroe[]=[
    {
      ciudadOrigen: "Quito",
      ciudadDestino: "Guayaquil",
      precio: 50,
      descripcion: "Un viaje panorámico desde la capital, Quito, hasta la ciudad portuaria de Guayaquil, donde podrás disfrutar de paisajes montañosos y costeros.",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Cuenca",
      ciudadDestino: "Loja",
      precio: 30,
      descripcion: "Un viaje a través de los Andes ecuatorianos, desde la encantadora ciudad de Cuenca hasta la histórica ciudad de Loja, conocida como la \"Capital Musical del Ecuador\".",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Esmeraldas",
      ciudadDestino: "Manta",
      precio: 25,
      descripcion: "Un recorrido por la costa norte de Ecuador, desde la relajada Esmeraldas hasta el popular destino playero de Manta, famoso por su cultura pesquera.",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Riobamba",
      ciudadDestino: "Baños",
      precio: 15,
      descripcion: "Un emocionante trayecto desde la ciudad andina de Riobamba hasta Baños, un pintoresco pueblo rodeado de naturaleza exuberante y famoso por sus aguas termales.",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Guayaquil",
      ciudadDestino: "Salinas",
      precio: 20,
      descripcion: "Un viaje de playa desde Guayaquil hasta Salinas, un balneario muy popular en la costa ecuatoriana, ideal para relajarse y disfrutar del sol y el mar.",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Latacunga",
      ciudadDestino: "Quilotoa",
      precio: 10,
      descripcion: "Una excursión hacia la impresionante laguna de Quilotoa, una caldera volcánica que ofrece vistas panorámicas impresionantes y un ambiente mágico.",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Galápagos",
      ciudadDestino: "Isabela",
      precio: 150,
      descripcion: "Un viaje de ensueño a las famosas Islas Galápagos, específicamente a Isabela, la isla más grande del archipiélago, famosa por su biodiversidad única.",
      tipo: "Externo"
    },
    {
      ciudadOrigen: "Quito",
      ciudadDestino: "Otavalo",
      precio: 20,
      descripcion: "Un recorrido desde la capital, Quito, hasta la ciudad indígena de Otavalo, famosa por su mercado de artesanías y textiles tradicionales.",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Manta",
      ciudadDestino: "Montecristi",
      precio: 15,
      descripcion: "Un corto trayecto desde Manta hasta Montecristi, conocido por su sombrero de paja toquilla, mundialmente conocido como \"Panamá Hat\".",
      tipo: "Interno"
    },
    {
      ciudadOrigen: "Tena",
      ciudadDestino: "Puyo",
      precio: 25,
      descripcion: "Un emocionante viaje a través de la selva amazónica ecuatoriana, desde Tena hasta Puyo.",
      tipo: "Interno"
    }
  ];

  constructor() { 
    console.log("Servicio listo para usar...");

  }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(idx:number):Heroe{
    return this.heroes[idx];
  }

  buscarHeroes(dato:string) : Heroe[] {
    let heroesArr:Heroe[] = [];
    dato = dato.toLocaleLowerCase();
    for(let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.ciudadOrigen.toLocaleLowerCase();
      if(nombre.indexOf(dato) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }

  addHero(hero:any){
    this.heroes.push(hero);
  }

}

export interface Heroe {
  ciudadOrigen: string;
  ciudadDestino: string;
  precio: number;
  descripcion: string;
  tipo: string;
  idx?: number;
}