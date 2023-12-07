import React from 'react'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {
  return (
    <>
  
      <div className='Notes-container'> 
      <h1 className='Notes-heading'>Notes</h1>
      <ListGroup/>
      <Form/>

      </div>
    </>
  )
}

export default App
