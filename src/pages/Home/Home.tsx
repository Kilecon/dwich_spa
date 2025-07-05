import styles from './Home.module.scss';
import { Button } from '@/components/ui/Button';

const Home = () => {
  return (
    <div className={styles.burger_container}>
      <div className={styles.burger_font}>
        <img 
          className={styles.burger_image} 
          src="\assets\images\burger_1.png" 
          alt="Delicious burger" 
        />
      </div>
      <div className={styles.button_overlay}>
        <Button 
          variant="tertiary" 
          size="fat" 
          onClick={() => console.log('Reserver')}
        >
          COMMANDER
        </Button>
      </div>
    </div>
  );
};

export default Home;