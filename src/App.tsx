import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddLinkForm from './components/AddLinkForm'
import AddTab from './pages/addTab'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/:Listing/add-new-tab' element={<AddTab />} />
      <Route path='/:Listng/add-new-url' element={<AddLinkForm />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App