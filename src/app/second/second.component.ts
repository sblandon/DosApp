import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  secondSonCalls: any;
  @Output('secondTalkin') callDad = new EventEmitter<any>();//7
  @Output('callDadChild1') callDadChild1 = new EventEmitter<any>();
  @Input('picturesFromParent') pictures;

  secondSonListening: string;
  constructor() { }

  ngOnInit() {
    console.dir(this.pictures);
  }

  showPictures(){
    console.dir(this.pictures)
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
