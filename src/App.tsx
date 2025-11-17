import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/burgerHome';
import Selection from './pages/Home/selectionHome';
import Reservation from './pages/Home/reservationHome';
import Header2 from './components/layout/Header2/Header2';
import Register from './pages/Register/Registerpage'


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
          <Routes>
            {/* Home route */}
            <Route path="/" element={
              <>
                <Header />
                <Home />
                <Selection />
                <Reservation />
                <Footer />
              </>
            } />

            {/* Register route */}
            <Route path="/register" element={
              <>
                <Header2 />
                <Register />
              </>
            } />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;