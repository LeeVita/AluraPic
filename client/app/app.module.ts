import 'rxjs/add/operator/map';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { FotoModule } from "./foto/foto.module";
import { PanelModule } from './panel/panel.module';

@NgModule({
    imports: [BrowserModule, FotoModule, HttpModule, PanelModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }