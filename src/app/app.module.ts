import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { GeneralComponent } from './general/general.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { MapComponent } from './map/map.component';
import { ExpansionBlockComponent } from './expansion-block/expansion-block.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SkillsComponent,
    GeneralComponent,
    WorkExperienceComponent,
    RadarChartComponent,
    MapComponent,
    ExpansionBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
