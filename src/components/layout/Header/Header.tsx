import styles from './Header.module.scss';
import { Button } from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

export const Header = () => {
  const navigate = useNavigate();

  const MenuClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    console.log('menu click');
    // sidebar
  };

  const ProfileClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    console.log('redirection profile');
    navigate('/profile');
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <img 
          src="/assets/icons/menu_icon_couleur.png" 
          alt="Menu"
          className={styles.navMenu}
          onClick={MenuClick}
          style={{ cursor: 'pointer' }}
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
            onClick={ProfileClick}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;