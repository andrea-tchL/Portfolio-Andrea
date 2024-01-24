import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NaviguationBar from './components/naviguationBar';
import {Home,About,Contact,Projects} from './pages/index';


const App = () => {
  return (
    <main>
      
        <BrowserRouter>
        
        <NaviguationBar />
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/About" element = {<About/>} />
          <Route path = "/Projects" element = {<Projects/>} />
          <Route path = "/Contact" element = {<Contact/>} />
        </Routes>

        </BrowserRouter>
        
      
    </main>
  )
}

export default App
