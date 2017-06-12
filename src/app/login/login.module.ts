import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import {LoginRouterModule} from './login.routing'
import {LoginComponent} from './login.component';

import {SharedModule} from '../shared/shared.module'

import {LoginService} from './login.service'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRouterModule,
        SharedModule
     
    ],
    declarations: [
        LoginComponent,
      
    ],
    providers: [LoginService]
})
export class LoginModule { }