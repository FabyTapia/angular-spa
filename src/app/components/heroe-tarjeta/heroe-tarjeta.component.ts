import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

//input le dice angular propiedad recibida desde fuera 
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
    
    @Input() heroe: any = {};//propiedad normal se agrefa decorador input
    @Input() index: number;//propiedad recibida desde afuera de componente 
  
  
  
    constructor(private router: Router) { }

  ngOnInit() {

  }
verHeroe(){
console.log( this.index);
this.router.navigate(['/heroe', this.index]);
}
}
