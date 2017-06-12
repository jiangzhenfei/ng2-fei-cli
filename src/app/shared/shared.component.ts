import { Component ,Input} from '@angular/core';


@Component({
  selector: 'form-help',

  template: `<div *ngIf="target.invalid">
                <div  *ngIf="!target._parent.submitted && target.dirty && target.errors.required" class="alert alert-danger col-sm-6">账号是必须输入的11</div>

                <div  *ngIf="target._parent.submitted && target.errors.required" class="alert alert-danger col-sm-6">账号是必须输入的</div>

                <div *ngIf="target.dirty && target.errors.pattern" class="alert alert-danger col-sm-6">以字母开头</div>

                <div *ngIf="target.dirty && target.errors.minlength" class="alert alert-danger col-sm-6">不能少于{{target.errors.minlength.requiredLength}}</div>
                <div *ngIf="target.dirty && target.errors.maxlength" class="alert alert-danger col-sm-6">不能大于{{target.errors.maxlength.requiredLength}}</div>
            </div>
            `

})
export class FormComponent {
   @Input() target
    constructor() {
        var _this = this;
        setTimeout(function(){
            console.log(_this.target)
            /*_this.target.dirty = true; only has getter  着这里无法手动设置dirty的值*/
        },5000)
            
    }
   
}

/*表单的验证规则,最大长度，最小长度，是不是必须填，正则等一系列的判断
*在这里target._parent.submitted指的就是整个表单，如果整个表单被提交过，则submitted为true，根据这个来让没有输入过的表单显示错误
*/
