import { Component } from '@angular/core';
import { IngredientType } from './ingredientType';

@Component({
  selector: 'app-ingredient-types',
  templateUrl: './ingredient-types.component.html',
  styleUrls: ['./ingredient-types.component.css']
})
export class IngredientTypesComponent {

  ingredientTypes = [new IngredientType('type1', ''), new IngredientType('type2', '')];

  selectRice(){

  }

  selectIngredientType(ingredientType: string){

  }


}
