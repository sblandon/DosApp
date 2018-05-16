import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  secondSonCalls: any;
  @Output('secondTalkin') callDad = new EventEmitter<any>();
  @Output('callDadChild1') callDadChild1 = new EventEmitter<any>();
  secondSonListening: string;
  constructor() { }

  ngOnInit() {
  }

  cry() {
    this.callDad.emit('Im wet')
  }

  changeClotes(){
    console.log('Im dry now')
  }

  dadCalls(passAttribute){
    this.secondSonListening = passAttribute;
  }

  pleaseCallDad(){
    this.callDadChild1.emit(this.secondSonCalls)
  }



}
