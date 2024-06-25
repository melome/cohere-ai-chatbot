import React, { useState } from 'react'
import './App.css'
import ChatPopUpButton from './components/ChatPopUpButton'
import ChatHistory from './features/ChatHistory/ChatHistory'

function App() {
  return (
    <>
      <ChatHistory />
      <ChatPopUpButton />
    </>
  )
}

export default App