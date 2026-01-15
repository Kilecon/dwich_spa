import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/burgerHome';
import Selection from './pages/Home/selectionHome';
import Reservation from './pages/Home/reservationHome';
import Header2 from './components/layout/Header2/Header2';
import Register from './pages/Register/Registerpage';
import Login from './pages/Login/Loginpage';
import Contact from './pages/Contact/contactPage'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
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

            {/* Contact route */}
            <Route path="/contact" element={
              <>
                <Header />
                <Contact />
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

            {/* Login route */}
            <Route path="/Login" element={
              <>
                <Header2 />
                <Login />
              </>
            } />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;