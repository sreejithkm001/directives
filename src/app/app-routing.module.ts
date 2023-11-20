import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  // { path: '**', component: WildcardComponent },
  {
    component: HomeComponent,
    path: '',
  },
  {
    path: 'Product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    component: ContactComponent,
    path: 'Contact',
  },
  {
    component: AboutComponent,
    path: 'About',
  },
  {
    component: StudentComponent,
    path: 'student/:studentname',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
