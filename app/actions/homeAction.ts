import types from './actionTypes'
import { Solution } from '../entity/index';

// TODO:
// The Action can only be EmptyAction, or PayloadAction, or MetaAction or MetaPayloadAction
export const getSolutionCategorys = () => ({
  type: types.GET_SOLUTION_CATEGORYS
})

export const receivedSolutionCategorys = (solutionCategoryDatas: Solution[]) => ({
  type: types.RECEIVED_SOLUTION_CATEGORYS,
  solutionCategoryDatas,
})
