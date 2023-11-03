import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Nav from './components/Nav';
import Experience from './components/Experience';

function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="experience" element={<Experience />} />
    </Routes>
    </>
  );
}

export default App;
