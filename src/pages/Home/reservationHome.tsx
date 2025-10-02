import styles from './reservationHome.module.scss';
import { Button } from '@/components/ui/Button';

const Home3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Venez réserver votre table dans notre enseigne</h1>

        <div className={styles.buttonWrapper}>
          <Button 
            variant="quaternary" 
            size="squared" 
            onClick={() => console.log('Reserver')}
          >
            RÉSERVER
          </Button>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <img 
          src="/assets/images/photoResto.png" 
          alt="Restaurant" 
          className={styles.mainImage} 
        />
        
        <div className={styles.overlayContainer}>
          <div className={styles.overlayContent}>
            <h3 className={styles.overlayTitle}>
              <img className={styles.iconAdresse} src="/assets/icons/reservation_icon_adresse.png" alt="Adresse icon" />
              Adresse :
            </h3>
            <p className={styles.overlayText}>4 Avenue de Verdun, 33127 Martignas-sur-Jalle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;