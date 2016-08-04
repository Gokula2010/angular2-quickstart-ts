import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector:'my-heroes',
    template:  `
        <div>
            <h2>My Heros</h2>
            <ul class="heroes">
                <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                    <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
            </ul>
        </div>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styleUrls:['dist/css/heroes.component.css'],
    directives:[HeroDetailComponent]
})

export class HeroesComponent implements OnInit  {

    constructor(private heroService: HeroService) { }


    heroes: Hero[];
    selectedHero: Hero;

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.getHeroes()

    }

    onSelect(hero: Hero) {
        console.log(hero);
        this.selectedHero = hero;
    }
    
}
