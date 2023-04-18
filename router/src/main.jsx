import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Router } from './routers/index.jsx'
import { RouterProvider } from 'react-router-dom'

import store from './Store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
