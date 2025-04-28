import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { acceuilComponent } from './acceuil/acceuil.component';


export const routes: Routes = [
  { path: '', component: acceuilComponent }, // Route par défaut
  { path: 'welcomePage', component: NavbarComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'acceuil', component: acceuilComponent },
  { path: 'contact', component: ContactComponent },


  

];



