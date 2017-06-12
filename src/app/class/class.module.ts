import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import {classRouting} from './class.routing'

import {ClassService} from './class.service'

import {ClassComponent} from './class.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        classRouting
       
    ],
    declarations: [
        ClassComponent
    ],
    providers: [ClassService]
})
export class ClassModule { }