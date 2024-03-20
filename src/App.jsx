import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <div>
        <Home></Home>
        <div className='w-11/12 mx-auto'>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default App
