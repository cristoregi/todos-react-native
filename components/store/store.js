import { createStore } from 'redux';
import { reducer } from '../reducers/todoReducer'

const store = createStore(reducer);

export default store