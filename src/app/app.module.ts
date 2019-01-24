import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeschiedenisComponent } from './geschiedenis/geschiedenis.component';
import { PraesidiumComponent } from './praesidium/praesidium.component';
import { PartnersComponent } from './partners/partners.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SEOService } from './seoservice.service';
import { Title, Meta } from '@angular/platform-browser';
import { map, filter, scan } from 'rxjs/operators';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    data: { title: 'Kludde | Home', metaDescription: 'Welkom op de website van Kludde!' }
   },
  { 
    path: 'geschiedenis', 
    component: GeschiedenisComponent,
    data: { title: 'Kludde | Geschiedenis', metaDescription: 'Meer over de geschiedenis van Kludde' }
   },
  { 
    path: 'praesidium', 
    component: PraesidiumComponent,
    data: { title: 'Kludde | Praesidium', metaDescription: 'Leer ons team kennen!' }
  },
  { 
    path: 'partners', 
    component: PartnersComponent,
    data: { title: 'Kludde | Partners', metaDescription: 'De partners van Kludde' }
  },
  { 
    path: '**', 
    component: HomeComponent,
    data: { title: 'Page not found', metaDescription: 'Deze pagina kan niet worden gevonden' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeschiedenisComponent,
    PraesidiumComponent,
    PartnersComponent,
    PageNotFoundComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SEOService],
})
export class AppModule { 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {}
    ngOnInit() {
      
  }
}
