import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'
import { Roster } from './views/Roster'

function App() {
  let isLogged = false

  return (
    <Routes>
      <Route path="/" element={<Home isLogged={isLogged} />} />
      <Route path="/roster" element={<Roster isLogged={isLogged} />} />
    </Routes>
  )
}

export default App
