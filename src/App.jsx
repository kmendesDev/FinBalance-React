import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer'
import FinanceBalanceForm from './components/finbalanceform'
import Form from './components/form'

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Header setSubmitted={setSubmitted} />

      {submitted ? (<FinanceBalanceForm name={name} user_id={1} />) : (
        <Form setSubmitted={setSubmitted} setName={setName} name={name} />
      )}

      <Footer />

    </>
  )
}

export default App

