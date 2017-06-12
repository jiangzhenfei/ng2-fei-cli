import {Routes, RouterModule} from '@angular/router';
import {ClassComponent} from './class.component'


const classRoutes: Routes = [
    {
        path:'',
        component:ClassComponent,
        children: [
           { path: '', component: ClassComponent },
           
        ]
    }
]

export const classRouting = RouterModule.forChild(classRoutes);