import styles from './Loginpage.module.scss';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Loginpage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.main_content}>
      <div className={styles.connexionText}>Connexion</div>
      <div className={styles.middleContainer}>
        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail*</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Tapez ici votre E-mail"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Mot de passe*</label>
            <div className={styles.passwordContainer}>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Tapez ici votre mot de passe (8 caractères minimum)"
                minLength={8}
              />
              <span 
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
              >
                <img 
                  src="/assets/icons/eye_icon.png" 
                  className={styles.eye}
                />
              </span>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <Button variant="primary" size="medium" onClick={() => console.log('connexion')}>
              Connexion
            </Button>
          </div>

          <div 
            className={styles.registerText}
            onClick={handleRegisterClick}
            style={{ cursor: 'pointer' }}
            >
            Pas encore de compte ? &gt;
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.background2}></div>
      </div>
    </div>
  );
};

export default Loginpage;