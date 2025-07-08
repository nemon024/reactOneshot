// import axios from 'axios';
import {useContext} from 'react'
// import {Route, Routes} from 'react-router-dom'
import Header1 from './components/Header1'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'
// import Home from  './pages/Home'
// import About from  './pages/About'
// import Contact from  './pages/Contact'
// import Product from  './pages/Product'


const App = () => {
  const data = useContext(DataContext)
  return(
  <div>
    <h1>This is app.js {data.username}</h1>
    <Header1 />
    <Section />
    <Footer />
    {/* <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/product' element={<Product />}/>

    </Routes> */}
  </div>
  )
}

export default App;
