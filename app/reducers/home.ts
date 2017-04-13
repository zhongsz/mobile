import actionType from '../actions/actionTypes';
const InitState={}
const homeReducer=(state:any=InitState,action:any)=>{
switch(action.type){
    case actionType.RECEIVED_SOLUTION_CATEGORYS:
    return  {
        ...state,
        solution:action.solutionCategoryDatas
    } 

    default:return state  
}
}

export default homeReducer