import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
    <Routes>
        <Route index path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
