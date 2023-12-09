import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Helmet>
          <title>Baihaqism</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <>
              <Helmet>
                <title>About - Baihaqism</title>
              </Helmet>
              <About />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Helmet>
                <title>Projects - Baihaqism</title>
              </Helmet>
              <Projects />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
