import { useState, useRef } from 'react';
import styles from './selectionHome.module.scss';
import { Button } from '@/components/ui/Button';

const Home2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const mouseStartX = useRef(0);
  const dragDistance = useRef(0);

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

  // Touch events for mobile
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

  // Mouse events for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    mouseStartX.current = e.clientX;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    dragDistance.current = mouseStartX.current - currentX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    // Check if drag distance is significant enough to change slide
    if (Math.abs(dragDistance.current) > 50) {
      if (dragDistance.current > 0) {
        setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
    
    setIsDragging(false);
    mouseStartX.current = 0;
    dragDistance.current = 0;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.selectionContainer} id="notre-selection">
      <div className={styles.headerSection}>
        <h1>NOTRE SÉLECTION</h1>
      </div>

      <div className={styles.contentWrapper}>
        {/* Mobile carousel - hidden on desktop */}
        <div className={styles.mobileCarousel}>
          {/* Navigation arrows for desktop when carousel is visible */}
          <div className={styles.carouselArrows}>
            <button 
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            <button 
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={nextSlide}
              disabled={currentIndex === items.length - 1}
            >
              ›
            </button>
          </div>

          <div 
            className={styles.carouselTrack} 
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
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
                    draggable="false"
                    src={item.image} 
                    alt={item.alt} 
                    className={styles.selectionImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots indicator - hidden on desktop */}
        <div className={styles.dotsContainer}>
          {items.map((_, index) => (
            <div 
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Desktop grid - hidden on mobile */}
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
      </div>
    </section>
  );
};

export default Home2;