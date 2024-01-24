import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'checkout',
    loadComponent: ()=>import("./pages/checkout/checkout.component").then(m=>m.CheckoutComponent)
  },
  {
    path:'address',
    loadComponent: ()=>import("./pages/address/address.component").then(m=>m.AddressComponent)
  },
  {
    path:'thankyou',
    loadComponent: ()=>import("./pages/thankyou/thankyou.component").then(m=>m.ThankyouComponent)
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
