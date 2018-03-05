import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PanelModule } from './panel/panel.module';
import { EntryComponent } from './entry/entry.component';
import { GaleryComponent } from './galery/galery.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ROUTING,
        FotoModule,
        PanelModule
    ],
    declarations: [
        AppComponent,
        GaleryComponent,
        EntryComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }