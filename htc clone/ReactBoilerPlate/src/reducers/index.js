import { combineReducers } from 'redux';
import SmartphoneReducer from './smartphone_reducer'
import AccessoriesReducer from './accessories_reducer'
import { reducer as formReducer } from 'redux-form'
import LoginReducer from './login_reducer'



const rootReducer = combineReducers({
  smartphones: SmartphoneReducer,
  accessories: AccessoriesReducer,
  form: formReducer,
  login: LoginReducer
});

export default rootReducer;
