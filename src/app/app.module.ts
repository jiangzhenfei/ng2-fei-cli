import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module'

/*app路由*/
import {routing} from './app.routing'

/*共享模块*/
import {CoreModule} from './core/core.module'

//notpage
import {NotPageComponent} from './notpage/notpage.component'

//ng2-bootstrap
import { AlertModule} from 'ng2-bootstrap';


@NgModule({
  	declarations: [//可以告诉 Angular 哪个组件属于AppModule ,指令和管道 — 它们也必须被添加到declarations数组
		AppComponent,
		NotPageComponent
  	],

  	imports: [//imports数组中应该只有NgModule类。不要放置其它类型的类。
		BrowserModule,
		FormsModule,
		HttpModule,
		LoginModule,
		CoreModule,
        AlertModule.forRoot(),

		routing,

  	],

  	providers: [],//引入服务，在所有这个模块下的都可以使用，不引入会报错，如果只需要在某个component下面使用，则只需要在某个component里面的providers里面引用即可
  	bootstrap: [AppComponent]
})

export class AppModule { }
