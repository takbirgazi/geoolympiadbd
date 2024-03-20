import { Outlet } from 'react-router-dom'
import './App.css'
import { useNavigation } from "react-router-dom";
import Home from './components/Home/Home'

function App() {
  const naviGation = useNavigation();
  return (
    <>
      <div>
        <Home></Home>
        <div className='w-11/12 mx-auto'>
          {naviGation.state === "loading" ? "Loading..." : <Outlet></Outlet>}
        </div>
      </div>
    </>
  )
}

export default App
