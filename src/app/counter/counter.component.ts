import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  //Declaração de atributo que pode ser utilizada como input da tag (app compnent html)
  //È possivel declarar quantos inputs quiser dentro de classe
  //Input é somente string
  @Input() name: string




//Quando um componente necessita acessar um service ou outro componente necessario declarar no construtor
  constructor() { }

  ngOnInit() {
  }

}