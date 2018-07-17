import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import{jewellService} from '../fireservices/jewell.service'
@Injectable()

export class subcatService {
  constructor(private http:HttpClient,private _jewellService:jewellService) {

  }

getjewlldata(){

   return this._jewellService.getJewellList();
}
}
