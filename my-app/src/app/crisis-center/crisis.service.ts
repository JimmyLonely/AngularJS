import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONSTANT = {
  AJAX: {
    CRISIS_SERVICE: 'api/crisises',
  }
}

@Injectable()
export class CrisisService {
  constructor (
    private http: Http
  ) {}

  getCrisises(): Promise<Crisis[]> {
    return this.http.get(CONSTANT.AJAX.CRISIS_SERVICE).toPromise().then(response => {
      return response.json() as Crisis[];
    }, response => {
      window.alert('hi')
      return null;
    })
  }
  getCrisis(id: number): Promise<Crisis> {
    return this.http.get(`${CONSTANT.AJAX.CRISIS_SERVICE}/${id}`).toPromise().then(response => {
      return response.json()
    })
  }

  update(crisis: Crisis): Promise<Crisis> {
    return this.http
               .put(`${CONSTANT.AJAX.CRISIS_SERVICE}/${crisis.id}`, JSON.stringify(crisis))
               .toPromise()
               .then(respons => {
                 return crisis;
               })
  }

  create(name: String): Promise<Crisis> {
    return this.http
               .post(CONSTANT.AJAX.CRISIS_SERVICE, JSON.stringify({name: name}))
               .toPromise()
               .then(response => {
                 return response.json() as Crisis;
               })
  }

  delete(crisis: Crisis): Promise<void> {
    return this.http
               .delete(`${CONSTANT.AJAX.CRISIS_SERVICE}/${crisis.id}`)
               .toPromise()
               .then (response => {
                 return null;
               })
  }
}