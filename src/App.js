
import './App.css';
import Navigacija from './components/Navigacija';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigacija />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
