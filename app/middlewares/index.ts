import {
  applyMiddleware,
  compose,
  createStore,
 } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import epics from '../epics'
import reducers from '../reducers'
import {
  autoRehydrate,
} from 'redux-persist'

declare const __DEV__: boolean

const composeAction = __DEV__ && global['reduxNativeDevToolsCompose'] ? global['reduxNativeDevToolsCompose'] : compose

export const whitelist = [
  'homeReducer',
]

const enhancer = composeAction(
  autoRehydrate(),
  applyMiddleware(
    createEpicMiddleware(epics)
  ),

)

const store = createStore(reducers,enhancer)

export default store