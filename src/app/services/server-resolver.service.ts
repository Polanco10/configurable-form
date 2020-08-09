import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable, of, EMPTY } from 'rxjs';
import {FormsService} from "./forms.service"
import { FieldConfig } from "./../field.interface";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take,  mergeMap } from 'rxjs/operators';

@Injectable()
export class ServerResolver implements Resolve<any>{
    constructor(private formService:FormsService,
        private router:Router){}
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<FieldConfig[]> |
     Promise<FieldConfig[]> | FieldConfig[] | any {
        const userId = route.params['id'];
        return this.formService.getJsonForm(userId).pipe(
            take(1),
            mergeMap(res=>{
                if(res) return of(res)
            this.router.navigate(['/']);
            return EMPTY;
            
            })
        )

    }

}