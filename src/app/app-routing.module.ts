import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollageHomeComponent } from './components/collage-home/collage-home.component';
import { CollageCreationComponent } from './components/collage-creation/collage-creation.component';

const routes: Routes = [
  { path: '', component: CollageHomeComponent },
  { path: 'create', component: CollageCreationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
