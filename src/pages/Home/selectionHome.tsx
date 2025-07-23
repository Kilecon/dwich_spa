import styles from './selectionHome.module.scss';
import { Button } from '@/components/ui/Button';

const Home2 = () => {
  return (
      <section className={styles.selectionContainer} id="notre-selection">
      <div className={styles.headerSection}>
        <h1>NOTRE SÉLECTION</h1>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          <div className={styles.selectionItem}>
            <Button
              variant="tertiary"
              size="large"
              onClick={() => console.log('redirect to Menu')}
            >
              MENU
            </Button>
            <img 
              src="/assets/images/selectionMenubackground.png" 
              alt="Menu selection" 
              className={styles.selectionImage}
            />
          </div>

          <div className={styles.selectionItem}>
            <Button
              variant="tertiary"
              size="large"
              onClick={() => console.log('redirect to Dwich')}
            >
              DWICH
            </Button>
            <img 
              src="/assets/images/selectionDwichbackground.png" 
              alt="Dwich selection" 
              className={styles.selectionImage}
            />
          </div>

          <div className={styles.selectionItem}>
            <Button
              variant="tertiary"
              size="large"
              onClick={() => console.log('redirect to Burger')}
            >
              BURGER
            </Button>
            <img 
              src="/assets/images/selectionBurgerbackground.png" 
              alt="Burger selection" 
              className={styles.selectionImage}
            />
          </div>

          <div className={styles.selectionItem}>
            <Button
              variant="tertiary"
              size="large"
              onClick={() => console.log('redirect to Petites Faims')}
            >
              PETITES FAIMS
            </Button>
            <img 
              src="/assets/images/selectionPetitesFaimsbackground.png" 
              alt="Petites Faims selection" 
              className={styles.selectionImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;