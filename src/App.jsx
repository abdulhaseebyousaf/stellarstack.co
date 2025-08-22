import './index.css'
import Home from './home'
import AboutUs from './about-us'
import Technology from './our-technologies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'           
function App() {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/our-technologies' element={<Technology/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
