import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
// import 'antd/dist/antd.css'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Toaster position='top-right' reverseOrder={false} />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
