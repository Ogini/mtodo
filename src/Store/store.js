import { createStore, combineReducers, /*applyMiddleware, */ compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import listsReducer from './Reducers/lists'

const persistConfig = {
    key: 'mtodo',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
    lists: listsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = []

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer, undefined, composeEnhancers(...enhancers))
export const persistor = persistStore(store)
