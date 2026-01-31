import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-pages',
  imports: [],
  standalone: true,
  templateUrl: './hero-pages.component.html',
  styleUrl: './hero-pages.component.css',
})
export class HeroPagesComponent {

 age = signal(45)
 name = signal("Ironman")


  heroDescription = computed(() => {
    const description = `${this.age()} - ${this.name()}`
    return description 
  })

  
  capitalizacion = computed(() => {
    const mayuscula = this.name().toUpperCase()
    return mayuscula 
  })

 
  
  changeHero() {
      this.name.set("Spiderman")
       this.age.set(30)
  }

  
  Reset() {
  this.age.set(45)
  this.name.set("IronMan")
}

  changeAge() {
    this.age.set(80)
}
}
