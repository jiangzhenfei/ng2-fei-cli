import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component'
import {HomeModule1Component} from './home.module1.component'
import {HomeModule2Component} from './home.module2.component'

const tablesRoutes: Routes = [
    {
        path:'',//注意是'',并不是home
        component:HomeComponent,
        children: [
           { path: '', component: HomeModule1Component },
           { path: 'homemodule1', component: HomeModule1Component },
           { path: 'homemodule2', component: HomeModule2Component },
        ]
    }
]

export const homeRouting = RouterModule.forChild(tablesRoutes);