import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host:{
    class:'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent {
  @Input() lable!:string
  // @HostBinding('class') className = 'control'
  // @HostListener('click') onClick(){
  //   console.log('Clicked!');    
  // }

  private el = inject(ElementRef)


  onClick(){
      console.log('Clicked!');   
      console.log(this.el);
       
    }
}
