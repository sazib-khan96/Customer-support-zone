

import { Suspense } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'

const CustomerData = fetch('/CustomerData.json')
.then(res => res.json())

function App() {


  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Suspense fallback={<p>Data is Loading.......</p>}>
          <CustomerTickets CustomerData={CustomerData}></CustomerTickets>
      </Suspense>
    </div>
  )
}

export default App
