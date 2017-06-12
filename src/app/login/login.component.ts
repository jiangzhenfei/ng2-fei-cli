import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';


declare var $:any;
//declare var swal:any;//在使用之前先声明要用到（用的是sweetalert插件）

import {CoreService} from '../core/core.service'

import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",

})
export class LoginComponent {

    constructor(public router: Router,public CoreService: CoreService,public loginservice:LoginService) {}

    submit=function(form){
        var self = this;

        /*判断哪一步出错了，在出错的输入框自动聚焦*/
        var first=null;
        if(form.controls){
            for(var key in form.controls){
                if(form.controls[key].invalid && first===null){
                    first = key
                    form._submitted = true;

                }
            }
            $('input[name="'+first+'"]').focus()
        }
        
        var data = {
            name:this.name,
            password:this.psw
        }
        this.loginservice.login(data).subscribe(function(e){
            if(e.login){
                self.router.navigateByUrl('home');
            }else{
                self.CoreService.loginLose(e.msg)
            }
        },function(e){
            console.log(e)
            self.CoreService.loginLose(e)
        })
    }

    addToast=function(){      
        this.CoreService.toasterSuccess();       
    }
}
