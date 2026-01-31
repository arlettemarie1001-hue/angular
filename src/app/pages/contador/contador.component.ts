import { Component, signal } from '@angular/core';

@Component({
selector: 'app-contador',
  imports: [],
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css',
})
export class ContadorComponent {

contador = signal(0)

sumar() {
  this.contador.update( v => v +  1)
}

restar() {

      this.contador.update( v => v > 0 ? v - 1 : 0)

}

multiplicar() {
  this.contador.update( v => v * v)
}

reset() {
  this.contador.set(0)
}

}
