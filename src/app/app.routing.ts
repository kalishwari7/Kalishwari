import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: 'registration', component: RegistrationFormComponent },
    { path: 'profile', component: ProfileComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'registration' }
];
export const appRoutingModule = RouterModule.forRoot(routes);