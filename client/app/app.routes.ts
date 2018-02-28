import { Routes, RouterModule } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { EntryComponent } from './entry/entry.component';

const APP_ROUTES: Routes = [
    { path: '', component: GaleryComponent },
    { path: 'entry', component: EntryComponent }
];
export const ROUTING = RouterModule.forRoot(APP_ROUTES);