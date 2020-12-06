
import Home from './components/Home' ;
import './App.css';
import Header from './components/Header'
import About from './components/About';
import ContactUs from './components/ContactUs';
// import { Routes,Route } from 'react-router-dom';
// import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div >
    <Header/>
    <Home/>
    <About/>
    <ContactUs/>
    {/* <Header/>
      
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
      </Routes> */}
      
    
    </div>
  );
}

export default App;
