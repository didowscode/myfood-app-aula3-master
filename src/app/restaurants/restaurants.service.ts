import { Restaurant } from './../restaurant/restaurant.model'
import { Http } from '@angular/http'

import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Injectable } from '@angular/core'

import { API_URL } from './../app.api'

import { ErrorHandler } from './../app.error-handler'

@Injectable()
export class RestaurantsService{

  constructor(private http : Http) {}

  list() : Observable<Restaurant[]> {
    return this.http.get(`${API_URL}/restaurants1`)
                .map(response => response.json())
                .catch(ErrorHandler.handlerError)
  }
}
