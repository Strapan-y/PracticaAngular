import { Injectable } from '@angular/core';
import axios,{ Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiAxios:Axios = axios.create({
    baseURL: 'http://localhost:3000'
  })


  public async getLibros(){
    const response = await this.apiAxios.get('/libros');
    console.log(response.data.libros);
    return response.data.libros;
  }

  public async deleteLibros(id:number){
    await this.apiAxios.delete("/libros/"+id);
    //await this.apiAxios.delete('/libros/${id}')
  }

  public async createLibro(libro:any){
    await this.apiAxios.post("/libros",libro)
  }

}
