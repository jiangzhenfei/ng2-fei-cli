import { Component,OnInit } from '@angular/core';
import {CoreService} from '../core/core.service'
declare var $:any;

@Component({
  selector: 'home-module2',
  templateUrl: './home.module2.component.html'
  
})
export class HomeModule2Component implements OnInit{
    constructor(public CoreService: CoreService) {}
    change=function(){
        console.log(1)
        this.percent = 20;

    }
    delete = function(){
        console.log(this.CoreService.user)
        this.CoreService.comfirmDelete('warning')
    }
    getData = function(){
        console.log(this.name)
    }
    percent = 45.0
    ngOnInit()  { 
        var self = this;
        setInterval(function(){
            self.percent++
            $('#my_pp').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '2014 某网站各浏览器浏览量占比'
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '浏览器访问量占比',
                    data: [
                        ['Firefox',   self.percent],
                        ['IE',       26.8],
                        {
                            name: 'Chrome',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['Safari',    8.5],
                        ['Opera',     6.2],
                        ['其他',   0.7]
                    ]
               }]
            });
        },5000)
        
    }

   
   
}


