import 'rxjs/add/operator/map';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { FotoModule } from "./foto/foto.module";
import { PanelModule } from './panel/panel.module';
import { EntryComponent } from './entry/entry.component';
import { GaleryComponent } from './galery/galery.component';
import { ROUTING } from './app.routes';

@NgModule({
    imports: [
        ROUTING,
        BrowserModule,
        FotoModule,
        HttpModule,
        PanelModule
    ],
    declarations: [AppComponent, EntryComponent, GaleryComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }