import { Directive, ElementRef, HostListener, Input } from '@angular/core';
declare var $:any;

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }

    @Input('myHighlight') highlightColor: string;//接收外部传入的值

    @HostListener('mouseenter') onMouseEnter() {//监听鼠标事件@HostListener
        this.highlight(this.highlightColor || 'red');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}


@Directive({
    selector: '[myInputChange]'
})
export class InputChangeDirective {
    @Input('myInputChange') inputChangeTarget ;//接收外部传入的值
    
    constructor(private el: ElementRef) { 
        console.log(this.inputChangeTarget)
    }

    


    
}