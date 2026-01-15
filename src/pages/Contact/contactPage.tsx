import styles from './contactPage.module.scss';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';


export const ContactPage = () => {
  const navigate = useNavigate();

  const contactButton = (e: MouseEvent<HTMLImageElement>) => { 
    e.preventDefault();
    console.log('contact click');
    navigate('/')
  };

  return (
    <div className={styles.main_content}>
      <div className={styles.contactText}>Contact</div>
      <div className={styles.middleContainer}>
        <div className={styles.formContainer}>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Nom*</label>
            <div className={styles.passwordContainer}>
              <input 
                type="text"
                id="password" 
                placeholder="Tapez ici votre Nom"
              />
            </div>
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
            <label htmlFor="password">Nom*</label>
            <div className={styles.passwordContainer}>
              <input 
                type="text"
                id="password" 
                placeholder="Tapez ici votre Nom"
              />
            </div>
          </div>

          <div className={styles.buttonContainer} onClick={contactButton}>
            <Button variant="primary" size="medium" onClick={() => console.log('connexion')}>
              Envoyer
            </Button>
          </div>

        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.background2}></div>
      </div>
    </div>
  );
};

export default ContactPage;