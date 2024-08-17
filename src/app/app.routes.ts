import { Routes } from '@angular/router';
import { RoleGuard } from './core/role.guard';
import { Permission, Screens } from './models/enum/permession.enum';
import { EmployeeComponent } from './pages/employee/employee.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsComponent } from './pages/products/products.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [RoleGuard],
        data: { permission: Screens.AccessHome }
    },
    {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [RoleGuard],
        data: { permission: Screens.AccessEmployee }
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [RoleGuard],
        data: { permission: Screens.AccessProducts }
    },
    {
        path: 'roles',
        component: RolesComponent,
        canActivate: [RoleGuard],
        data: { permission: Screens.AccessRole }
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '404',
        component: NotFoundComponent,
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

