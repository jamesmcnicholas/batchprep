import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  template: `
    <form [formGroup]="ingredientForm" (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input type="text" formControlName="name" />
      </label>
      <label>
        Type:
        <input type="text" formControlName="type" />
      </label>
      <label>
        Image:
        <input type="file" (change)="onFileChange($event)" />
      </label>
      <button>Add Ingredient</button>
    </form>
  `,
})
export class AddIngredientComponent {
  ingredientForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    image: [null],
  });

  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientService
  ) {}

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target?.files?.length > 0) {
      const file = target.files[0];
      this.ingredientForm.patchValue({
        image: file,
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.ingredientForm.get('name')?.value ?? '');
    formData.append('type', this.ingredientForm.get('type')?.value ?? '');
    formData.append('image', this.ingredientForm.get('image')?.value ?? '');

    this.ingredientService.addIngredient(formData).subscribe((response) => {
      console.log(response);
    });
  }
}