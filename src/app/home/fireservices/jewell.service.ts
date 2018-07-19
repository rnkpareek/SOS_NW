import { Injectable ,ErrorHandler} from '@angular/core';
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import{Jewell} from './models/jewell'

@Injectable()

export class jewellService {


/*jewell:Observable<Jewell[]>*/
jewell:any;



constructor(
     public _angularFirestore: AngularFirestore
    ,private db: AngularFireDatabase) {

     }






getJewellList() {

this.jewell= this._angularFirestore.collection('JEWELLERYS')
                .doc('Womens')
                .collection('ring').snapshotChanges().map(changes =>{
      return changes.map( a=>{
      const data = a.payload.doc.data() as Jewell;

      data.id = a.payload.doc.id;

      return data
    }
  )
   });


  return  this.jewell



}


}




