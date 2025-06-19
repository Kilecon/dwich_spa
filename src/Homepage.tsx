import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function HomePage() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <p>Test Header</p>
          </nav>
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