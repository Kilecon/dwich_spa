import styles from './Footer.module.scss';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img 
          className={styles.navLogo} 
          src="/Dwich&Co_Logo_Couleur.png" 
          alt="Dwich&Co Logo" 
        />
        <div className={styles.footerSection}>
          <h2>Notre carte</h2>
          <ul>
            <li>Menu</li>
            <li>Sandwich</li>
            <li>Burger</li>
            <li>Salade</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h2>Informations et contacts</h2>
          <p>4 Avenue de Verdun, 33127 Martignas-sur-Jalle</p>
          <p>Tel. 05.56.85.73.76</p>
          <ul>
            <li>Mentions légales</li>
            <Link to="/contact" className={styles.footerLink}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h2>Horaires d'ouvertures</h2>
          <p>Mardi-verdered : 11h00-22h00</p>
          <p>Samedi : 18h00-22h00</p>
          <p>Dimanche : 18h00-21h30</p>
        </div>

        <div className={styles.footerSection}>
          <h2>Réservations</h2>
          <Button 
            variant="primary" 
            size="medium" 
            onClick={() => console.log('Reserver')}
          >
            Réserver
          </Button>
        </div>
      </div>

        <div className={styles.footerBottom}>
            <div className={styles.greenBand}>
                <p>©DwichsCo 2024. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;