import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";
import { TitleFilter } from "./filter.pipe";

@NgModule({
    declarations: [FotoComponent, TitleFilter],
    exports: [FotoComponent, TitleFilter]
})
export class FotoModule { }