import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Nav from './components/Nav';
import Experience from './components/Experience';
import About from './components/About';

function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="experience" element={<Experience />} />
        <Route index path="about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
