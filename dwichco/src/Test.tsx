import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test/Test';

function TestTest() {
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
            <Route path="/" element={<Test />} />
          </Routes>
        </main>

        <footer>
          <p>Test footer</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default TestTest;