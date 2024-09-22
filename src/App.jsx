import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Navbar activeMenu={2}></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  )
}

export default App
