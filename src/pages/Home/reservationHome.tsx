import styles from './reservationHome.module.scss';
import { Button } from '@/components/ui/Button';

const Home3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Venez réserver votre table dans notre enseigne</h1>
        <div className={styles.address}>
          <p><strong>Adresse :</strong></p>
          <p>4 Avenue de Verdun, 33127 Martignas-sur-Jalle</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button 
            variant="primary" 
            size="large" 
            onClick={() => console.log('Reserver')}
          >
            Réserver
          </Button>
        </div>
      </div>
      
      <div className={styles.imageContainer}>
        <img 
          src="/assets/images/photoResto.png" 
          alt="Restaurant" 
          className={styles.mainImage} 
        />
      </div>
    </div>
  );
};

export default Home3;