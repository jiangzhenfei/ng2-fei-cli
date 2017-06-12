import { Component, OnInit } from '@angular/core';
import {ClassService} from './class.service'

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
    data = []
    constructor(private service:ClassService) { }

    ngOnInit() {
    }

    dian=function(){
        var self = this;
        this.service.getData().subscribe(function(e){
            console.log(e)
            self.data = e
        },function(e){
            console.log(e)
        })
    }

}
