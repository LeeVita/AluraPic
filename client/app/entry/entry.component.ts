import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Component({
    moduleId: module.id,
    selector: 'entry',
    templateUrl: './entry.component.html'
})
export class EntryComponent {
    photo: FotoComponent = new FotoComponent();

    constructor() {
        this.photo.titulo = 'A';
        this.photo.url = 'B';
        this.photo.descricao = 'C';
    }

    save(event: Event): void {
        event.preventDefault();
        console.log(this.photo);
        this.photo = new FotoComponent();
    }
}