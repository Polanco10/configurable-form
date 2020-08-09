import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";

@Component({
  selector: 'dynamic-form',
  template: `
    <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
        <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form" >
        </ng-container>
    </form>
  `,
  styles: [
  ]
})

export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  get value() {
    return this.form.value;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.createControl();
   }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  createControl() {
    const group = this.fb.group({});
    
    this.fields.forEach(field => {
      if (field.type === "button") return; 
      if (field.type === "formarray"){
        let control
        const arrays:FormArray =  this.fb.array([]);
        const sub_group={}

        for(let i=0;i<field.inputs.length;i++){
          let name_input:string= field.inputs[i]['name']
          control = this.fb.control(field.inputs[i]['value'], this.bindValidations(field.inputs[i]['validations'] || [])); 
          sub_group[name_input]=control

        }
        arrays.push(this.fb.group(sub_group))
        group.addControl(field.name, arrays);


      } else{
       
        const control = this.fb.control(field.value, this.bindValidations(field.validations || []));    
        group.addControl(field.name, control);
      }  

    });

    return group;
    }

    onSubmit(event: Event) {
      event.preventDefault();
      event.stopPropagation();
      if (this.form.valid) {
        this.submit.emit(this.form.value);
      } else {
      this.validateAllFormFields(this.form);
      }
    }
  
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    control.markAsTouched({ onlySelf: true });
    });
    }
}
