
import './App.css';
import Navigacija from './components/Navigacija';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'
import Proizvodi from './pages/Proizvodi';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigacija />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/proizvodi' element={<Proizvodi/>}/>
          <Route path='/kontakt' element={<Kontakt/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
