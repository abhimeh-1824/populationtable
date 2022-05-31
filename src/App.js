import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/homepage/Home';
import City from './components/city/City';
import { Routes, Route } from "react-router-dom";
import HomeNavbar from './components/homepage/HomeNavbar';

function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />

        </Routes>
    </div>
  );
}

export default App;
