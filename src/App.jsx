import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>

<Route path='/' element={<LandingPage />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />

</Routes>
</BrowserRouter>
  )
}

export default App