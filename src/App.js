import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

function App() {
  useEffect(() => {
    AOS.init();
    GLightbox({ selector: '.glightbox' });
  }, []);

  return (
    <div className="App">
      <Header />
      <main id="main">
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
