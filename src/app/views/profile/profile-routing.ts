import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const ProfileRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'user-reload',
                component: ProfileComponent,
                data: { title: 'Profile' }
            }
        ]
    }
];
