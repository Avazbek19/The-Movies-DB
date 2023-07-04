import {Outlet} from 'react-router-dom'
// import Navbar from './pages/navbar/navbar'
import Footer from './pages/footer/footer';
import HomePage from './pages/home/home.page';
import Navbar from './pages/navbar/navbar';

function App() {
  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    {/* <Navbar/>
    <Outlet/>
    <Footer/> */}
  </>
  )
}

export default App;