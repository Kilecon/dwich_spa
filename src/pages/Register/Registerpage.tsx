import styles from './Registerpage.module.scss';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

export const Registerpage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/login');
  };

  const RegisterButton = (e: MouseEvent<HTMLImageElement>) => { 
    e.preventDefault();
    console.log('register click');
    navigate('/')
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.main_content}>
      <div className={styles.creationText}>Créer un compte</div>
      <div className={styles.middleContainer}>
        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="prenom">Prénom*</label>
            <input 
              type="text" 
              id="prenom" 
              placeholder="Tapez ici votre prénom"
              maxLength={30}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="nom">Nom*</label>
            <input 
              type="text" 
              id="nom" 
              placeholder="Tapez ici votre Nom"
              maxLength={30}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="telephone">Téléphone*</label>
            <input 
              type="tel" 
              id="telephone" 
              placeholder="Tapez ici votre numéro de téléphone"
              pattern="[0-9]*"
            />
          </div>

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

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirmation mot de passe*</label>
            <div className={styles.passwordContainer}>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                placeholder="Confirmez votre mot de passe"
                minLength={8}
              />
              <span 
                className={styles.passwordToggle}
                onClick={toggleConfirmPasswordVisibility}
              >
                <img 
                  src="/assets/icons/eye_icon.png" 
                  className={styles.eye}
                />
              </span>
            </div>
          </div>

          <div className={styles.buttonContainer} onClick={RegisterButton}>
            <Button variant="primary" size="medium" onClick={() => console.log('creer compte')}>
              Créer mon compte
            </Button>
          </div>

          <div 
            className={styles.loginText}
            onClick={handleRegisterClick}
            style={{ cursor: 'pointer' }}
            >
            Déjà client ? &gt;
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.background2}></div>
      </div>
    </div>
  );
};

export default Registerpage;