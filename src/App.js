import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Layout>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
