import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent} from "./pages/contador/contador.component"
import { HeroPagesComponent} from "./pages/hero/hero-pages.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ContadorComponent, // Debe estar aquí
    HeroPagesComponent // Debe estar aquí
  ],
  templateUrl: './app.html',
})
export class AppComponent { }