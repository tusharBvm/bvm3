import { createStore } from 'redux';
import crudReducer from '../reducers/crudReducer';

const store = createStore(crudReducer)

export default store