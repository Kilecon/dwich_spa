import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home/burgerHome';
import Home2 from './pages/Home/selectionHome';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

function HomePage() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home1 />
                <Home2 />
              </>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default HomePage;