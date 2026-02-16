import styles from './Profil.module.scss';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

const ICONS = {
  settings: "/assets/icons/parametreIcon.png",
  orders: "/assets/icons/commandeIcon.png",
  reservations: "/assets/icons/reservationIcon.png"
};

type TabType = 'settings' | 'orders' | 'reservations';

export const Profil = () => {
  const [activeTab, setActiveTab] = useState<TabType>('settings');

  // ... (Je garde les fonctions renderSettings, renderOrders, renderReservations identiques à avant, pas besoin de les changer) ...
  const renderSettings = () => (
    <>
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label>Prénom*</label>
          <input type="text" placeholder="Prénom..." />
        </div>
        <div className={styles.inputGroup}>
          <label>Nom*</label>
          <input type="text" placeholder="Nom..." />
        </div>
        <div className={styles.inputGroup}>
          <label>Téléphone*</label>
          <input type="tel" placeholder="Numéro de téléphone..." />
        </div>
        <div className={styles.inputGroup}>
          <label>E-mail*</label>
          <input type="email" placeholder="E-mail..." />
        </div>

        <div className={styles.actionsContainer}>
          <Button variant="tertiary" size="medium" onClick={() => console.log('Save')}>
            Enregistrer
          </Button>
        </div>
      </div>

      <div className={styles.passwordSection}>
        <Button variant="primary" size="medium" onClick={() => console.log('Change Password')}>
          Modifier mon mot de passe
        </Button>
      </div>
    </>
  );

  const renderOrders = () => (
    <>
      <div className={styles.listSection}>
        <h3 className={styles.sectionHeader}>A venir</h3>
        <div className={styles.itemCard}>
          <div className={styles.cardHeader}>
            <span>Nom</span>
            <span>Numéro de commande</span>
            <span>02/01/2024</span>
            <span>18H00</span>
            <span>Prix</span>
            <span>^</span>
          </div>
          <div className={styles.cardDetails}>
            <span>Produit</span>
            <span>Quantité</span>
            <span>Prix unitaire €</span>
          </div>
        </div>
      </div>
      <div className={styles.listSection}>
        <h3 className={styles.sectionHeader}>Passée</h3>
        <div className={styles.itemCard}>
          <div className={styles.cardHeader}>
            <span>Nom</span>
            <span>Numéro de commande</span>
            <span>01/01/2024</span>
            <span>18H00</span>
            <span>Prix</span>
            <span>v</span>
          </div>
        </div>
      </div>
    </>
  );

  const renderReservations = () => (
    <>
      <div className={styles.listSection}>
        <h3 className={styles.sectionHeader}>A venir</h3>
        <div className={styles.itemCard}>
          <div className={styles.cardHeader}>
            <span>Nom</span>
            <span>Numéro de réservation</span>
            <span>02/01/2024</span>
            <span>18H00</span>
          </div>
        </div>
      </div>
      <div className={styles.listSection}>
        <h3 className={styles.sectionHeader}>Passée</h3>
        <div className={styles.itemCard}>
          <div className={styles.cardHeader}>
            <span>Nom</span>
            <span>Numéro de réservation</span>
            <span>01/01/2024</span>
            <span>18H00</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    // NOUVEAU WRAPPER QUI PREND TOUTE LA LARGEUR POUR LE FOND
    <div className={styles.mainWrapper}>
      
      {/* CONTENEUR CENTRÉ POUR LE CONTENU */}
      <div className={styles.pageContainer}>
        
        {/* SIDEBAR */}
        <nav className={styles.sidebar}>
          <div 
            className={`${styles.navItem} ${activeTab === 'settings' ? styles.navItemActive : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <img src={ICONS.settings} alt="Paramètres" />
            <span>Paramètres de compte</span>
          </div>

          <div 
            className={`${styles.navItem} ${activeTab === 'orders' ? styles.navItemActive : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <img src={ICONS.orders} alt="Commandes" />
            <span>Mes commandes</span>
          </div>

          <div 
            className={`${styles.navItem} ${activeTab === 'reservations' ? styles.navItemActive : ''}`}
            onClick={() => setActiveTab('reservations')}
          >
            <img src={ICONS.reservations} alt="Réservations" />
            <span>Mes réservations</span>
          </div>
        </nav>

        {/* CONTENT AREA */}
        <main className={styles.contentArea}>
          <div className={styles.pageTitle}>
            <img src={ICONS[activeTab]} alt="" />
            {activeTab === 'settings' && "Paramètres de compte"}
            {activeTab === 'orders' && "Mes commandes"}
            {activeTab === 'reservations' && "Mes réservations"}
          </div>

          <div className={styles.whiteContainer}>
            {activeTab === 'settings' && renderSettings()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'reservations' && renderReservations()}
          </div>

          {activeTab === 'settings' && (
            <div className={styles.deleteAccount}>
              Supprimer mon compte
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Profil;