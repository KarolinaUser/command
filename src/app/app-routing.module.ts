import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
