import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Services from './components/services/services.jsx';
import Aboutus from './components/aboutus/aboutus.jsx';
import Contact from './components/contact/contact.jsx';
import Medical from './components/medical/medical.jsx';

function App() {

  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Services/>
       <Medical/>
        <Aboutus/>
        <Contact/>
    </div>
  );
}

export default App;
