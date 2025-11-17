import styles from './Header2.module.scss';
import { useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

export const Header2 = () => {
  const navigate = useNavigate();

  const LogoClick = (e: MouseEvent<HTMLImageElement>) => { 
      e.preventDefault();
      console.log('logo click');
      navigate('/')
    }
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <img 
          className={styles.navLogo}
          onClick={LogoClick}
          style={{ cursor: 'pointer' }}
          src="/Dwich&Co_Logo_Couleur.png" 
          alt="Dwich&Co Logo" 
        />
      </div>
    </header>
  );
};

export default Header2;