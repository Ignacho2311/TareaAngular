import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {DetalleNoticiasComponent} from './componentes/detalle-noticias/detalle-noticias.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiasComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"formulario",component:FormularioComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
