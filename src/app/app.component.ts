import { Component,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = null;
  // add as class atribute. after that call the function check lines below
  @ViewChild('sebastian') sonNumber1;
  @ViewChild('camilo') sonNumber2;

  constructor() {
  }

  ngOnInit(){
    this.title = 'hello';
  }

  hello() {
    this.title = this.title + ' Class';
    alert(this.title )
  }
  fisrtIsTalkin(popo){
    console.log('First baby is crying '+ popo);
    this.sonNumber1.eat();
  }

  secondIsTalkin(reason){
    console.log('Second baby is crying '+ reason)
  }
  changeMySonClothes(){
    this.sonNumber2.changeClotes();

  }

  receiveValueInput(screamToChangeVAlue){
    console.log(screamToChangeVAlue);
    this.sonNumber2.dadCalls(screamToChangeVAlue)
  }

  receiveValueInputChild1(screamToChangeVAlueChild1){
    console.log(screamToChangeVAlueChild1);
    this.sonNumber1.dadCallsChildOne(screamToChangeVAlueChild1)
  }



}
