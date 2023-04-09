import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
  riceSelected = false;
  pastaSelected = false;
  tortillaSelected = false;
  beanSelected = false;
  noneSelected = false;


  selectRice(){
    this.riceSelected = true;
    this.pastaSelected = false;
    this.tortillaSelected = false;
    this.beanSelected = false;
    this.noneSelected = false;
  }
  
  selectPasta(){
    this.riceSelected = false;
    this.pastaSelected = true;
    this.tortillaSelected = false;
    this.beanSelected = false;
    this.noneSelected = false;
  }

  selectTortilla(){
    this.riceSelected = false;
    this.pastaSelected = false;
    this.tortillaSelected = true;
    this.beanSelected = false;
    this.noneSelected = false;
  }

  selectBeans(){
    this.riceSelected = false;
    this.pastaSelected = false;
    this.tortillaSelected = false;
    this.beanSelected = true;
    this.noneSelected = false;
  }

  selectNone(){
    this.riceSelected = false;
    this.pastaSelected = false;
    this.tortillaSelected = false;
    this.beanSelected = false;
    this.noneSelected = true;
  }

}
