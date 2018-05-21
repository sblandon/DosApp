import { Component, OnInit, Provider, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  fistSonListening: any;
  ingredientName = null;
  name = null
  time = null;
  @Output() fistTalkin = new EventEmitter<any>();
  @Output() changeValueInput = new EventEmitter<any>();//12
  @Input('picturesFromParent') pictures; //6

  constructor() { }

  ngOnInit() {
    console.dir(this.pictures);
  }

  submit() {
    this.ingredientName = this.ingredientName;
    this.time = this.time;
    console.log(this.ingredientName)
  }

  cry() {
    this.fistTalkin.emit('Im hungy')
  }

  eat() {
    console.log('Im eating')
  }

  //function that talks with the father to pass info to the other child
  callEmit(){//12 receive event on the html
    this.changeValueInput.emit(this.ingredientName);
  }

  dadCallsChildOne(passAttribute){
    this.fistSonListening = passAttribute;
  }


}
