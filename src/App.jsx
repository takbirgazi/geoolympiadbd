import { Outlet } from 'react-router-dom'
import './App.css'
import { useNavigation } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const naviGation = useNavigation();
  return (
    <>
      <div>
        <Header></Header>
        <div>
          {naviGation.state === "loading" ? <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div> : <Outlet></Outlet>}
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
