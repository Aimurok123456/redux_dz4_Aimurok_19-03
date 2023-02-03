
import { Provider } from 'react-redux'
import './App.css'
import Intercom from './components/intercom/Intercom'
import store from './redux/Store'
import React from 'react'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Intercom/>
      </Provider>
    </div>
  )
}

export default App
