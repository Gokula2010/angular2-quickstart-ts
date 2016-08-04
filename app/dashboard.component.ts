import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector:'my-dashboard',
    templateUrl: 'dist/partials/dashboard.component.html',
    styleUrls:['dist/css/dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

    constructor(private heroService: HeroService) { }

    heroes: Hero[] = [];

    ngOnInit() {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1, 5));
    }

    gotoDetail() {

    }

}