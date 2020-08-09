import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-formarray',
  template: `
  <div class="example-container">
  <mat-form-field class="" [formGroup]="group"> 
    <div class="row" *ngFor="let elem of arrayTemp(); let i = index;">
          <div [formGroup]="array['controls'][i]">
            <div *ngFor="let input of inputs">             
              <input  matInput [type]="input.inputType" [placeholder]="input.label" [formControlName]="[input.name]">  
              <br>
              <br>
              elem: {{elem.controls[input.name].value}}
            </div>
          </div>

    </div>
  </mat-form-field>
  <button mat-raised-button color="primary" type="button"  (click)="add()">
    <span class="fs-13 fw-light">Agregar</span>
  </button>  
  </div>
   
  `,
  styles: []
})
export class FormarrayComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  array :FormArray ;
  inputs=[]

  constructor(private fb: FormBuilder) { 

    }
    arrayTemp():FormArray{
      return this.group.controls[this.field.name]['controls'] as FormArray
    }
    ngOnInit(): void {
      this.array = this.group.get(this.field['name']) as FormArray;
      this.inputs=this.field.inputs

    }

    add(){
       const sub_group={}
      let control

      for(let i=0;i<this.inputs.length;i++){
        let name_input:string= this.inputs[i]['name']
        control = this.fb.control(''); //TODO: Agregar validaciones (externalizar validacion)
        sub_group[name_input]=control

      }        
      this.array.push(this.fb.group(sub_group))

    }

}
