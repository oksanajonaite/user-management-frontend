import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Users } from './components/users/users';
import { Admin } from './components/admin/admin';
import { Audit } from './components/audit/audit';

//importuojame visus komponentus, kad galetume priskirti URLams, sukuriame ir eksportuojame marsrutu sarasa
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //kai ulr tuscias, automatiskai nukreipia i /logi.pathMatch:'full'-tikrina visa url o ne tik pradzia
  { path: 'login', component: Login },
  { path: 'users', component: Users },
  { path: 'admin', component: Admin },
  { path: 'audit', component: Audit }
];