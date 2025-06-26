import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.burger_font}>
      <img 
          className={styles.burger_image} 
          src="\assets\images\burger_1.png" 
        />
    </div>
  );
};

export default Home;