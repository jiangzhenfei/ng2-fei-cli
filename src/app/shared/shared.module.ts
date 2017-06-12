import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './shared.directive'
import { InputChangeDirective } from './shared.directive'
import {FormComponent} from './shared.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HighlightDirective,
        InputChangeDirective,
        FormComponent
    ],
    providers: [ 
       
    ],
    exports:[HighlightDirective,InputChangeDirective,FormComponent]
})
export class SharedModule { }
