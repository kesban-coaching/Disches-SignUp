import './App.css'
import { Route,Routes,NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profil } from './pages/Profil'
import { Context } from './store/context'

function App() {
  

  return (
    <Context.Provider value={[]}>
    <div className="App">
      <header>Header</header>
      <Routes> <Route path='/' element={<Home></Home>}>  </Route> </Routes>
      <Routes> <Route path='/profil' element={<Profil></Profil>}>  </Route> </Routes>
      <footer>Footer</footer>
    </div>
    </Context.Provider>
  )
}


export default App
