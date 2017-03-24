import { combineReducers } from 'redux';
import SmartphoneReducer from './smartphone_reducer'
import AccessoriesReducer from './accessories_reducer'
import RegisterReducer from './register_reducer'
import { reducer as formReducer } from 'redux-form'



const rootReducer = combineReducers({
  smartphones: SmartphoneReducer,
  accessories: AccessoriesReducer,
  register: RegisterReducer,
  form: formReducer
});

export default rootReducer;
