import { Routes } from '@angular/router';
import { HeroPagesComponent } from './pages/hero/hero-pages.component';
import { ContadorComponent} from "./pages/contador/contador.component"


export const routes: Routes = [

    {
         path: "",
    component: ContadorComponent
    },

{
    path: "hero",
    component: HeroPagesComponent
}


];
