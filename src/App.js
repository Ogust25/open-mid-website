import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'

function App() {
  let isLogged = false

  return (
    <Routes>
      <Route path="/" element={<Home isLogged={isLogged} />} />
    </Routes>
  )
}

export default App
