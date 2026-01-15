import styles from './contactPage.module.scss';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

export const ContactPage = () => {
  const navigate = useNavigate();

  const handleContactSubmit = (e: MouseEvent<HTMLDivElement>) => { 
    e.preventDefault();
    console.log('contact click');
    navigate('/');
  };

  return (
    <div className={styles.main_content}>
      {/* Background blobs remain absolute and animated */}
      <div className={styles.background}>
        <div className={styles.background2}></div>
      </div>

      <div className={styles.contactText}>Contact</div>
      
      <div className={styles.middleContainer}>
        <div className={styles.formContainer}>

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
            <label htmlFor="email">E-mail*</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Tapez ici votre E-mail"
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message*</label>
            <textarea 
              id="message"
              className={styles.messageInput}
              placeholder="Tapez ici votre message (Limite de 600 caractères)"
              maxLength={600}
            />
          </div>

          <div className={styles.buttonContainer} onClick={(e: any) => handleContactSubmit(e)}>
            <Button variant="primary" size="medium">
              Envoyer
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;