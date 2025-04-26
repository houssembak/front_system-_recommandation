import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { acceuilComponent } from './acceuil/acceuil.component';
import { SupportITComponent } from './services/support-it/support-it.component';
import { ServicesComponent } from './services/services.component';
import { AdministrationMicrosoft365Component } from './services/administration-microsoft-365/administration-microsoft-365.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { AdministrationAzureComponent } from './services/administration-azure/administration-azure.component'; // Importation du composant
import { AdministrationSystemeComponent } from './services/administration-systeme/administration-systeme.component';
import { ConsultingCyberSecurityComponent } from './services/consulting-cyber-security/consulting-cyber-security.component';
import { InfrastructuresCloudComponent } from './services/infrastructures-cloud/infrastructures-cloud.component';
import { MicrosoftPowerComponent } from './services/microsoft-power/microsoft-power.component';
import { PowerBiComponent } from './formation/power-bi/power-bi.component';
import { PowerAutomateFormationComponent } from './formation/power-automate/power-automate-formation.component';
import { SupportApplicatifComponent } from './services/support-applicatif/support-applicatif.component';
import { PowerBiProComponent } from './formation/power-bi-pro/power-bi-pro.component';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MS365Component } from './formation/MS365/MS365.component';
import { MicrosoftBiComponent } from './services/microsoft-bi/microsoft-bi.component';
import { PowerAutomateComponent } from './services/power-automate/power-automate.component';
import { ProductComponent } from './admin/produit/product/product.component';




import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { GestionFormationComponent } from './admin/gestion-formations/gestion-formations.component';
import { GestionUtilisateurComponent } from './admin/gestion-utilisateur/gestion-utilisateur/gestion-utilisateur.component';


export const routes: Routes = [
  { path: '', component: acceuilComponent }, // Route par défaut
  { path: 'welcomePage', component: NavbarComponent },
  { path: 'NousContacter', component: NousContacterComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'acceuil', component: acceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support-it', component: SupportITComponent },
  { path: 'services', component: ServicesComponent },
  //{ path: 'products1', component: ProductComponent },
  { path: 'administration-microsoft-365', component: AdministrationMicrosoft365Component },
  { path: 'administration-azure', component: AdministrationAzureComponent },
  { path: 'administration-systeme', component: AdministrationSystemeComponent },
  { path: 'cyber-consulting', component: ConsultingCyberSecurityComponent },
  { path: 'infrastructures-cloud', component: InfrastructuresCloudComponent },
  { path: 'microsoft-power', component: MicrosoftPowerComponent },
  { path: 'power-bi', component: PowerBiComponent },
  { path: 'power-automate-formation', component: PowerAutomateFormationComponent },
  { path: 'support-applicatif', component: SupportApplicatifComponent },

  { path: 'Formations', component: GestionFormationComponent},
  { path: 'profile', component: ProductComponent },  // Ensure this line exists




  
    { path: 'profile', component: ProductComponent },  // Ensure this line exists
  

  {
    path: 'products',
    component: ProductListComponent
  },
  { path: 'power-bi-pro', component: PowerBiProComponent },
  { path: 'power-automate', component: PowerAutomateComponent },
  { path: 'card', component: CartDropdownComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
     
      { path: 'products1', component: ProductComponent },
      { path: 'Formations', component: GestionFormationComponent},
      { path: 'Utilisateurs' , component :GestionUtilisateurComponent },
    ]
  },
  {
    path: 'MS365',
    component: MS365Component
  },
  {
    path: 'microsoft-bi',
    component: MicrosoftBiComponent
  },

  { 
    path: 'edit-profile', 
    component: EditProfileComponent 
  }

];



