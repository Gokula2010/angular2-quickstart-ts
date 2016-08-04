import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl:'dist/partials/hero-detail.component.html',
    styleUrls:['dist/css/hero-detail.component.css'],

})

export class HeroDetailComponent {
    @Input() hero: Hero;

}