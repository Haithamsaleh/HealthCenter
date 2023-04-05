import react from 'react'
import {Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Nav from './Components/Nav';
import Login from './Components/Login';
import SideNav  from './Components/SideNav';
function App() {

  return (
    <>
    <Nav />
    
    <Routes>
<Route exact path="/" element={<Home />} />
<Route  path="/login" element={<Login />} />
   </Routes>
   
    </>

  )
}

export default App
