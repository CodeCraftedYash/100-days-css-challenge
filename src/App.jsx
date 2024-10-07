import { useState } from 'react'
import {Heading , Nav} from "./components/header/Header"
import 'remixicon/fonts/remixicon.css'
import PageBody from './components/body/PageBody'
import Footer from './components/footer/Footer'
function App() {
 
  return (
    <div className="w-full min-h-screen bg-slate-900">
    <Heading />
    <Nav />
    <PageBody />
    <Footer />
    </div>
  )
}

export default App
