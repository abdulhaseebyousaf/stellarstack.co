import './index.css'
import Home from './home'
import AboutUs from './about-us'
import Technology from './our-technologies'
import Services from './our-services'
import Staff from './our-staff'
import How from './how-we-hire'
import { BrowserRouter, Route, Routes } from 'react-router-dom'           
function App() {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/our-technologies' element={<Technology/>} />
        <Route path='/our-services' element={<Services/>}></Route>
        <Route path='/our-staff' element={<Staff/>}></Route>
        <Route path='/how-we-hire' element={<How/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
