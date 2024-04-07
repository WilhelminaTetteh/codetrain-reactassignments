import { useState } from 'react'
import SimpleCard from './SimpleCard';
import './App.css'

function App() {

  return (
    <>
      <SimpleCard 
         title="Some food "
        description="Description of the food."
        imageUrl="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      
    </>
  )
}

export default App
