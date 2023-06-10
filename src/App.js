import './App.css';
import Navbar from './components/Navbar';
import Cardslider from './components/Cardslider';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
