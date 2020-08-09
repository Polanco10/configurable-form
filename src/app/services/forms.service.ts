import { FieldConfig } from "./../field.interface";
import { Validators } from "@angular/forms";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
    providedIn:'root'
})
export class FormsService{
    private keys=['type','label','name','inputType','options','collections','value','inputs','validations']
    constructor(private http:HttpClient){}

    getJsonForm(userId:number){
        return this.http.get<FieldConfig[]>(`../../assets/${userId}.json`).pipe(map((data)=>{
          return this.instanceFields(data)

        }))   
    }

    instanceFields(jsonConfig):FieldConfig[]{
      const regConfig: FieldConfig[]=[]
      for(let i=0;i<jsonConfig.length;i++){
        const temp:FieldConfig={} 
        for(let j=0;j<this.keys.length;j++){
          if(jsonConfig[i][this.keys[j]]!=undefined && this.keys[j]!='validations'){
            temp[this.keys[j]]=jsonConfig[i][this.keys[j]]
          }
          if(jsonConfig[i]['validations'] && this.keys[j]=='validations'){
            temp[this.keys[j]]=this.assignValidations(jsonConfig[i]['validations'])
          }
        }
        regConfig.push(temp)
      }
      return regConfig
    }

    assignValidations(validations){
      const ValidArray: Validators[]=[]

      for(let i=0;i<validations.length;i++){
        let validator:Validators={
          name:validations[i]['name'],
          validator:validations[i]['validator']=="Validators.required"?Validators.required:"", //TODO:MAP Validators
          message:validations[i]['message']

        }
        ValidArray.push(validator)
      }
      return ValidArray
    }

}