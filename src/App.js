import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import Beers from './Pages/Beers/Beers';
import BeerDetails from './Pages/BeerDetails/BeerDetails';



function App() {
  return (
    <div className="App">
    <Navbar />

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/BeerDetails/:id" element={<BeerDetails />} />


    </Routes>


    </div>
  );
}

export default App;
