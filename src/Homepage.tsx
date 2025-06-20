import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/layout/Header/Header';

function HomePage() {
  return (
    <BrowserRouter>
      <div>
        <header>
          {<Header/>}
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer>
          <p>Test footer</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default HomePage;