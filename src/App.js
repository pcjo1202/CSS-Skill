import './App.css'

import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import ContextMenu from './components/ContextMenu/ContextMenu'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ContextMenu />
    </div>
  )
}

export default App
