import { receivedSolutionCategorys } from './../actions/homeAction';
import { MiddlewareAPI } from "redux";
import { ActionsObservable } from 'redux-observable'
import ActionType from '../actions/actionTypes'
import { Observable, AjaxResponse } from "rxjs/Rx";
import { Solution } from '../entity/index';

const fetchSolution = (action: ActionsObservable<any>, store: MiddlewareAPI<any>) => {
    return action.ofType(
    ActionType.GET_SOLUTION_CATEGORYS,
  ).map((response:AjaxResponse)=>{
        console.log(response)
      if(response.status==200){
        return response.response.data as Solution[]
      }
      else{
          console.log('error')
          return []
      }    
  }).switchMap((solutionData:Solution[])=>{
    return Observable.of(receivedSolutionCategorys(solutionData))
  })
}

export default fetchSolution