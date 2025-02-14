
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'
import Overview from './pages/Overview'

function App() {

  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/movie/:id' element={<Overview/>}/>      
     </Routes>
    </>
  )
}

export default App
