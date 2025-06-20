import styles from './Header.module.scss';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <img 
            src="/assets/icons/menu_icon_couleur.png" 
            alt="Menu"
            className={styles.navMenu}
          />
        <Link to="/TESTEST" className={styles.navTextLink}>
          NOTRE CARTE
        </Link>
      </div>
      <div className={styles.navContainer}>
        <img 
          className={styles.navLogo} 
          src="/Dwich&Co_Logo_Couleur.png" 
          alt="Dwich&Co Logo" 
        />
        <div className={styles.rightGroup}>
          <Button variant="primary" size="medium" onClick={() => console.log('Commander')}>
            Commander
          </Button>
          <Button variant="primary" size="medium" onClick={() => console.log('Reserver')}>
            Réserver
          </Button>
          <img 
            src="/assets/icons/profil_icon_couleur.png" 
            alt="Profile"
            className={styles.navProfil}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;