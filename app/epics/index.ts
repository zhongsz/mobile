import { combineEpics } from 'redux-observable'
import fetchSolution from './solution';

export default combineEpics(
    fetchSolution
)
