import { reduxcer } from '../reduxcer/reduxcers/reduxser.js'
import { todoReducer } from '../reduxcer/reduxcers/reduxtodolist.js'
import { combineReducers, createStore } from 'redux'
const reduxgop = combineReducers({
    reduxcer,
    todoReducer
})
export const store = createStore(reduxgop)