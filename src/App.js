
import './App.css';
import Navigacija from './components/Navigacija';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'
import Proizvodi from './pages/Proizvodi';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigacija />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/proizvodi' element={<Proizvodi/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
