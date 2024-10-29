import React from 'react'
//import './App.css'
import Gallery from './components/Gallery'
import Profile from './components/Profile'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
          <Gallery />
          <Profile />

          <div>
            <TodoList></TodoList>
          </div>
    </>
  )
}

export default App
