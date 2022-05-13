import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaComponent } from './features/social-media/social-media.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'ud', pathMatch: 'full'},
    { path: 'sm', component: SocialMediaComponent},
    { path: 'ud', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
