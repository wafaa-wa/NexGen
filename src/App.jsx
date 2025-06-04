import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Careers from './pages/Careers/Careers'
import Blogs from './pages/Blogs/Blogs'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import { LinksData } from './Data/LinksData'
import BlogsOpen from './pages/BlogsOpen/BlogsOpen'

function App() {


  return (
    <>
      <NavBar Logo="/images/NavBar/Logo.png" items={LinksData} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog/:id' element={<BlogsOpen />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
