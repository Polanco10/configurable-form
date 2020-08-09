import { Component, ViewChild, OnInit, AfterViewInit} from "@angular/core";
import { FieldConfig } from "./../../field.interface";
import { DynamicFormComponent } from "./../../components/dynamic-form/dynamic-form.component";
import { ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-user',
  template: `
  <div class="form">
  <div>
    <h1> Registration Form   </h1>
  </div>
    <dynamic-form [fields]="regConfig" (submit)="submit($event)"></dynamic-form>
    <div class="margin-top">
  </div>
</div>
  `,
  styles: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  title = 'dynamic-form';
  regConfig: FieldConfig[] = [];
  constructor(
              private route:ActivatedRoute
    ){
   
  }
   
    ngOnInit(){
      this.route.data.subscribe(
        (data:Data)=>{
          this.regConfig=data["server"]

        })
       
    }

    submit(value: any) {
      console.log(value)
      console.log(this.form)
    }

}
