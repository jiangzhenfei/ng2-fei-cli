import { Component, OnInit,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import {homeRouting} from './home.routing'
import {HomeComponent} from './home.component'
import {HomeModule1Component} from "./home.module1.component"
import {HomeModule2Component} from './home.module2.component'

import { Ng2SmartTableModule } from 'ng2-smart-table';

import {SharedModule} from '../shared/shared.module'

//ng2-bootstrap
import { ModalModule,TooltipModule,DropdownModule} from 'ng2-bootstrap';

//ng2-charts（必须下载ng2-charts 和 chart.js）
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        homeRouting,
        Ng2SmartTableModule,
        SharedModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        DropdownModule.forRoot(),
        ChartsModule
       
    ],
    declarations: [
        HomeComponent,
        HomeModule1Component,
        HomeModule2Component
    ],
    providers: []
})
export class HomeModule { }