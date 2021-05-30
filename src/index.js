import React from 'react'
import ReactDom from 'react-dom'
import Post from './Post'
import './index.css'

const App = () => {
  return (
    <>
      <Post />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
