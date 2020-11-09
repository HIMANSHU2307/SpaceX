import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor/service.interceptor';
import { FiltersComponent } from './components/organisms/filters/filters.component';
import { MissionListComponent } from './components/organisms/mission-list/mission-list.component';
import { MissionCardComponent } from './components/molecules/mission-card/mission-card.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { FilterSectionComponent } from './components/molecules/filter-section/filter-section.component';
import { LoaderComponent } from './components/organisms/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MissionListComponent,
    MissionCardComponent,
    ButtonComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FilterSectionComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
