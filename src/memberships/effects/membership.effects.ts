import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import { Membership } from '../models/membership.model';
import * as MembershipActions from '../actions/membership.actions';
// type Action = MembershipActions.All; //TODO: review if this line of code is necessary, or may it be deleted? what was its original purpose?

// import { Store, createFeatureSelector, createSelector } from '@ngrx/store';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';
import { switchMap, mergeMap, map } from 'rxjs/operators';

@Injectable()
export class MembershipEffects {
  
  // ************************************************************
  // Observable Queries available for consumption by views
  // ************************************************************
  
  // ************************************************************
  // Effects to be registered at the Module level
  // ************************************************************
  
  
  //TODO: implement success and failure actions action types in switchMap to properly handle errors to prevent the @Effect() observable chain unintentionally breaking 
  @Effect()
  query$: Observable<Action> = this.actions$.ofType<MembershipActions.Query>(MembershipActions.QUERY).pipe(
    switchMap(action => {
      console.log(action);
      return this.afs.collection<Membership>('memberships', ref => { //TODO: review store state name as `memberships` vs. `membership` and corresponding afs or afdb path
        return ref.where('status', '==', 'inactive')
      })
      .stateChanges()
    }),
    mergeMap(actions => actions),
    map(action => {
      return {
        type: `[Membership] ${action.type}`,
        payload: {
          ...action.payload.doc.data(),
          id: action.payload.doc.id
        }
      };
    })
  );
  
  @Effect() 
  update$: Observable<Action> = this.actions$.ofType(MembershipActions.UPDATE).pipe(
    map((action: MembershipActions.Update) => action),
    switchMap(data => {
      const ref = this.afs.doc<Membership>(`memberships/${data.id}`); //TODO: review store state name as `memberships` vs. `membership` and corresponding afs or afdb path
      return Observable.fromPromise(ref.update(data.changes));
    }),
    map(() => new MembershipActions.Success())
  );
  
  // ************************************************************
  // Internal Code
  // ************************************************************
  
  constructor(
    private router: Router,
    private actions$: Actions,
    private afs: AngularFirestore
  ) {}
  
  // ************************************************************
  // Internal Methods
  // ************************************************************
  
}