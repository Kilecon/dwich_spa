import styles from './Header2.module.scss';

export const Header2 = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <img 
          className={styles.navLogo} 
          src="/Dwich&Co_Logo_Couleur.png" 
          alt="Dwich&Co Logo" 
        />
      </div>
    </header>
  );
};

export default Header2;