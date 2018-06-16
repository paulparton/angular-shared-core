import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const mobileAppRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'users',
                loadChildren: '../../../feature-modules/src/lib/user-details/user-details.mobile-app.module#UserDetailsMobileAppModule'
            }
        ]
    }
];
