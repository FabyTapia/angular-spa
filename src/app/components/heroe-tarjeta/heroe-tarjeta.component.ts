import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
//output emiter evento de hijo a padre va dela mano con eventemitter elemento
//input le dice angular propiedad recibida desde fuera 
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
    
    @Input() heroe: any = {};//propiedad normal se agrefa decorador input
    @Input() index: number;//propiedad recibida desde afuera de componente 
  
  @Output() heroeSeleccionado: EventEmitter<number>;
            //observable

  //propiedad que el padre nesecita escuchar 
    constructor(private router: Router) { 
      this.heroeSeleccionado = new EventEmitter(); //aqui se inicializa eventemiter
    }

  ngOnInit() {

  }
verHeroe(){
//console.log( this.index);
//this.router.navigate(['/heroe', this.index]);
this.heroeSeleccionado.emit( this.index);

}

}
