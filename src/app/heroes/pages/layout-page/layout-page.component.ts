import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  constructor(private router: Router) {}
  sidebarItems =[
    {label: 'Listado', icon:'label', url: './list'},
    {label: 'Añadir', icon:'add', url: './new-hero'},
    {label: 'Buscar', icon:'search', url: './search'}
  ]

  redireccion(ruta:String){
    for(let i=0; i < this.sidebarItems.length; i++){
      if(ruta == this.sidebarItems[i].label){
        console.log(this.sidebarItems[i].url);

        this.router.navigate(["/heroes" + this.sidebarItems[i].url])
      }
    }
  }
}
