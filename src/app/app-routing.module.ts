import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
},
{
    component:ProductsComponent,
    path:'Product'
},
{
    component:ContactComponent,
    path:'Contact'
},
{
    component:AboutComponent,
    path:'About'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
