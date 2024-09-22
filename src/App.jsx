import './App.css'
import Navbar from './components/common/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Navbar className='sticky top-0 z-10'></Navbar>
      <HomePage></HomePage>
    </>
  )
}

export default App
