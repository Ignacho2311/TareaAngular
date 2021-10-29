import { Component, OnInit } from '@angular/core';
import { ListaNoticias,Noticias } from '../../interfaces/noticias';
import {ListaCategorias,Categorias} from '../../interfaces/categorias'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  ListaNoticias=ListaNoticias;
  ListaCategorias=ListaCategorias;
  Categoria:any;
  Noticia:any;
  Color:any;
  id:any;
  constructor() {
    
   }

  ngOnInit(): void {
  
  }

  Colorboton(id:number):String{
    this.Noticia=this.ListaNoticias.find(objeto=>objeto.id==id);
    this.Categoria=ListaCategorias.find(objeto=>objeto.id==this.Noticia.id);
    this.Color=this.Categoria.color;
    
    return this.Color;
  }
  

  getItem(){
    return this.ListaNoticias.filter((ListaNoticias) => ListaNoticias.destacado==true);
  }

  getItem2(){
    return this.ListaNoticias.filter((ListaNoticias) => ListaNoticias.destacado==false);
  }

}
