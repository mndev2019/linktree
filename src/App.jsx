
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HumansLinktree from './HumansLinktree'

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HumansLinktree/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
