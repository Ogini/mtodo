import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './Store/store'

import App from './App/App.js'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
