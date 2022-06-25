
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddYourClick from './Pages/AddYourClick/AddYourClick';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='bg-[#000000]'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addYourClick" element={<AddYourClick></AddYourClick>} />
        </Routes>

      </div>
    </div>
  );
}


export default App;
