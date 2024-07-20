import { Component, OnInit } from '@angular/core';
import { CreateLibroComponent } from '../create-libro/create-libro.component';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-read-libros',
  templateUrl: './read-libros.component.html',
  styleUrl: './read-libros.component.css'
})
export class ReadLibrosComponent implements OnInit {

  Libros: Libro[] = []

  ngOnInit(): void {
    this.getLibros();
  }

  public async getLibros(){

    const data =  await this.LibrosService.getLibros();
    console.log(data);
    this.Libros=data;
  }

  constructor(
   private LibrosService: LibrosService
  ){}

  public async eliminarlibros(id:number){
    await this.LibrosService.deleteLibros(id);
    this.Libros=this.Libros.filter(Libro=>Libro.id!== id)
  }


}


interface Libro{
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  publicacion: string;
  resumen: string;
 }
