import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Experience from './components/Experience';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="experience" element={<Experience />} />
        <Route index path="about" element={<About />} />
        <Route index path="hobbies" element={<Hobbies />} />
        <Route index path="contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
