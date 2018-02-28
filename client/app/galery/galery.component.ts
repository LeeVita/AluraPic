import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'galery',
    templateUrl: './galery.component.html'
})
export class GaleryComponent {
    fotos: Object[];
    constructor(http: Http) {
        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }
}