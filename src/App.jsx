import {Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Nav from './Components/Nav';
function App() {

  return (
    <>
    <Nav />
    
    <Routes>
<Route exact path="/" element={<Home />} />
   </Routes>
   
    </>

  )
}

export default App
