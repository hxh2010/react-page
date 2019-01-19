import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import {reducer as userReducer} from './userStore';
import {reducer as appReducer} from './appStore';

import {persistStore, persistReducer, persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import createEncryptor from 'redux-persist-transform-encrypt'

const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
});



const persistConfig = {
  key: 'root',
  storage,
  transforms: [createEncryptor({secretKey: 'app'})],
  //whitelist: ['user','app']
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
//export const store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store)











