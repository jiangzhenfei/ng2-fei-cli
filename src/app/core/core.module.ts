import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {CoreComponent} from './core.component'
import {CoreService} from './core.service'

//以下两个属于angular2-toastr的东西
import {ToasterComponent, ToastComponent} from 'angular2-toastr/index'
import {ToasterService} from 'angular2-toastr';




@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ToasterComponent,
        ToastComponent,
        CoreComponent
    ],
    providers: [ 
        ToasterService,
        CoreService
   ],
  exports:[ToasterComponent,ToastComponent,CoreComponent]
})
export class CoreModule { }
