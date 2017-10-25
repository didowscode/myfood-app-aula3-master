import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'

export const ROUTES : Route[] = [
  { path : '', component: HomeComponent},
  { path : 'about', component: AboutComponent},
  { path : 'restaurants', component: RestaurantsComponent}
]
