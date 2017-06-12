import { Injectable } from '@angular/core';

//封装后台错误提示信息的右上角弹出红色小框
import {ToasterService} from 'angular2-toastr';

//封装一些删除，弹出输入框的确认操作
declare var swal:any;//在使用之前先声明要用到（用的是sweetalert插件，使用前在index.html里面引入相应的js文件）


@Injectable()
export class CoreService {

    constructor(public _toaster: ToasterService) {}

    toasterError(title,message): void {  //标题    提示信息 显示关闭按钮 消失需要时间
        this._toaster.error(title, message, true, 2000);
    } 

    toasterSuccess(): void {
        this._toaster.success('title', 'message', true, 2000);
    }

    //确认删除，删除后的操作等，删除失败的处理等都需要后期的处理
    comfirmDelete(type):void {
        swal({
            title:"确定要删除吗?",
            text:'删除吧',
            type:type,
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定!",
            cancelButtonText: "取消!",
            closeOnConfirm: false,
            closeOnCancel: true,
            showLoaderOnConfirm: true
        },function(isConfirm){
            if(isConfirm){
                setTimeout(function(){
                    swal({
                        title: "删除成功!",
                        type: "success",
                        confirmButtonColor: "#007AFF"
                    });
                },1000)
                
            }
        })
    }

    //登入失败的，待传入失败原因等处理
    loginLose(msg):void {
        swal({
            title:"登入失败",
            text:'原因：'+msg,
            type:'error',
        })
    } 

    //在所有ajax跟后台请求的时候都需要
    //actionName指的是目前操作名字，例如请求详情列表,service是后台ajax请求函数，callback是回调函数，成功之后需要的操作
    //如果失败，会有toasterShow来处理提示失败原因，目前没有封装
    doServer(actionName, service, callback, status):void {
        var self = this;
        //doService的第四个参数,是用来在发生某一状态时,要执行的函数,
        if(typeof(status)=='undefined'){
            status = function(){};
        }
        //如果要在请求之前,执行某一操作,可以在doService的第四个参数执行函数:function(e){ if(e=="loading"){函数内容}}
        status('loading');
        if(typeof service=="function"){
            service().then(function(e){
                if(e.data.success){
                    status('ready');
                    callback(e);
                }else{
                    status('error');
                    //self.toasterError()
                }
            },function(e){
                //http异常
                status('error');
                //self.toasterError()
            });
        }else{
            service.then(function(e){

                if(e.data.success){
                    status('ready');
                    callback(e);
                }else{
                    status('error');
                    //self.toasterError()
                }
            },function(e){
                //http异常
                status('error');
                //self.toasterError()
            });
        }
    }

}