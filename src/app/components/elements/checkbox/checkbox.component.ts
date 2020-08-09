import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../../field.interface";

@Component({
  selector: "app-checkbox",
  template: `
  <div class="form-check" [formGroup]="group">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" [formControlName]="field.name">
    <label class="form-check-label" for="exampleCheck1">{{field.label}}</label>
  </div>
    `,
  styles: []
})
//<div class="demo-full-width margin-top" [formGroup]="group" >
//<mat-checkbox [formControlName]="field.name">
//{{field.label}}
//</mat-checkbox>
//</div>
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}