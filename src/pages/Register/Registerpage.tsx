import styles from './Registerpage.module.scss';
import { Button } from '@/components/ui/Button';

export const Registerpage = () => {
  return (
    <div className={styles.main_content}>
      <div className={styles.middleContainer}>
        <Button 
          variant="primary" 
          size="small" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="secondary" 
          size="small" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="tertiary" 
          size="small" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <br></br>
                <Button 
          variant="primary" 
          size="medium" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="secondary" 
          size="medium" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="tertiary" 
          size="medium" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <br></br>
                <Button 
          variant="primary" 
          size="large" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="secondary" 
          size="large" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="tertiary" 
          size="large" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <br></br>
                <Button 
          variant="primary" 
          size="fat" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="secondary" 
          size="fat" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="tertiary" 
          size="fat" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <br></br>
                <Button 
          variant="primary" 
          size="squared" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="secondary" 
          size="squared" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
        <Button 
          variant="tertiary" 
          size="squared" 
          onClick={() => console.log('Reserver')}
        >
          TEST
        </Button>
      </div>
        <div className={styles.background}>
            <div className={styles.background2}>
            </div>
        </div>
    </div>
    

  );
};

export default Registerpage;