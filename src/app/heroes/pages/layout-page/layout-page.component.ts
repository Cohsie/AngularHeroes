import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { heroe } from '../../interfaces/hero.interface'
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/auth/interfaces/user.interface';


@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  sidebarItems =[
    {label: 'Listado', icon:'label', url: '/list'},
    {label: 'Añadir', icon:'add', url: '/new-hero'},
    {label: 'Buscar', icon:'search', url: '/search'}
  ]
  redireccion(ruta:String){
    for(let i=0; i<this.sidebarItems.length;i++){
      if(ruta == this.sidebarItems[i].label){
        console.log(this.sidebarItems[i].url);

        this.router.navigate(["/heroes" + this.sidebarItems[i].url])
      }
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

/*
  public hero!: heroe

  ngOnInit(): void{
    if (!this.hero) throw new Error("No está")
    }*/
}
