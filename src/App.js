import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Experience from './components/Experience';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Layout>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
