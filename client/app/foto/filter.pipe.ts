import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
    name: 'titleFilter'
})
export class TitleFilter implements PipeTransform {
    transform(photos: FotoComponent[], filter: string) {
        if (!photos) return [];
        filter = filter.toLowerCase();
        return photos.filter(p => { return p.titulo.toLowerCase().includes(filter); });
    }
}