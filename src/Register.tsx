import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header2 from './components/layout/Header2/Header2';
import RegisterPage from './pages/Register/Registerpage'

function Register() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header2 />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <RegisterPage />
              </>
            } />
          </Routes>
        </main>
        
      </div>
    </BrowserRouter>
  );
}

export default Register;