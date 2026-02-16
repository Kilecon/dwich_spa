import styles from './Header.module.scss';
import { Button } from '@/components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { MouseEvent } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const LogoClick = (e: MouseEvent<HTMLImageElement>) => { 
    e.preventDefault();
    navigate('/');
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <img 
          src="/assets/icons/menu_icon_couleur.png" 
          alt="Menu"
          className={styles.navMenu}
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        />
        
        {isMenuOpen && (
          <div className={styles.dropdown}>
            <ul className={styles.dropdownList}>
              <li onClick={() => handleNavClick('/carte')}>Notre carte</li>
              <li onClick={() => handleNavClick('/menus')}>Menu</li>
              <li onClick={() => { console.log('Commander'); setIsMenuOpen(false); }}>Commander</li>
              <li onClick={() => { console.log('Reserver'); setIsMenuOpen(false); }}>Réserver</li>
              <li onClick={() => handleNavClick('/contact')}>Contact</li>
            </ul>
          </div>
        )}

        <Link to="/carte" className={styles.navTextLink}>
          NOTRE CARTE
        </Link>
      </div>

      <div className={styles.navContainer}>
        <img 
          className={styles.navLogo}
          onClick={LogoClick}
          style={{ cursor: 'pointer' }}
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
            onClick={() => navigate('/register')}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;