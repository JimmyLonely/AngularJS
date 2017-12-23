import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONSTANT = {
    AJAX: {
        HEROE_SERVICE: 'api/heroes',
    }
}

@Injectable()
export class HeroService {
    constructor (
        private http: Http
    ) {}

    getHeroes(): Promise<Hero[]> {
      return this.http.get(CONSTANT.AJAX.HEROE_SERVICE).toPromise().then(response => {
        return response.json() as Hero[];
      }, response => {
          window.alert('hi')
          return null;
      })
    }
    getHero(id: number): Promise<Hero> {
        return this.http.get(`${CONSTANT.AJAX.HEROE_SERVICE}/${id}`).toPromise().then(response => {
            return response.json()
        })
    }

    update(hero: Hero): Promise<Hero> {
        return this.http
            .put(`${CONSTANT.AJAX.HEROE_SERVICE}/${hero.id}`, JSON.stringify(hero))
            .toPromise()
            .then(respons => {
                return hero;
            })
    }

    create(name: String): Promise<Hero> {
        return this.http
            .post(CONSTANT.AJAX.HEROE_SERVICE, JSON.stringify({name: name}))
            .toPromise()
            .then(response => {
                return response.json() as Hero;
            })
    }

    delete(hero: Hero): Promise<void> {
        return this.http
                .delete(`${CONSTANT.AJAX.HEROE_SERVICE}/${hero.id}`)
                .toPromise()
                .then (response => {
                    return null;
                })
    }
}