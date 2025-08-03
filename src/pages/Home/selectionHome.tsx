import { useState, useEffect, useRef } from 'react';
import styles from './selectionHome.module.scss';
import { Button } from '@/components/ui/Button';

const Home2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const items = [
    {
      title: "MENU",
      image: "/assets/images/selectionMenubackground.png",
      alt: "Menu selection"
    },
    {
      title: "DWICH",
      image: "/assets/images/selectionDwichbackground.png",
      alt: "Dwich selection"
    },
    {
      title: "BURGER",
      image: "/assets/images/selectionBurgerbackground.png",
      alt: "Burger selection"
    },
    {
      title: "PETITES FAIMS",
      image: "/assets/images/selectionPetitesFaimsbackground.png",
      alt: "Petites Faims selection"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
      touchStartX.current = 0;
    }
  };

  return (
    <section className={styles.selectionContainer} id="notre-selection">
      <div className={styles.headerSection}>
        <h1>NOTRE SÉLECTION</h1>
      </div>

      <div className={styles.contentWrapper}>
        {isMobile && (
          <>
            <div 
              className={styles.mobileCarousel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <div 
                className={styles.carouselTrack} 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {items.map((item, index) => (
                  <div key={index} className={styles.carouselItem}>
                    <div className={styles.selectionItem}>
                      <Button
                        variant="tertiary"
                        size="large"
                        onClick={() => console.log(`redirect to ${item.title}`)}
                      >
                        {item.title}
                      </Button>
                      <img 
                        src={item.image} 
                        alt={item.alt} 
                        className={styles.selectionImage}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.dotsContainer}>
              {items.map((_, index) => (
                <div 
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </>
        )}

        {!isMobile && (
          <div className={styles.gridContainer}>
            {items.map((item, index) => (
              <div key={index} className={styles.selectionItem}>
                <Button
                  variant="tertiary"
                  size="large"
                  onClick={() => console.log(`redirect to ${item.title}`)}
                >
                  {item.title}
                </Button>
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className={styles.selectionImage}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home2;