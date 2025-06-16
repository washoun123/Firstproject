import React from 'react';
import { useState } from 'react';
import '../CSS/TopBar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const TopBar = () => {
    const [showRedBar, setShowRedBar] = useState(true);

  return (
    <>
      {showRedBar ? (
        <div style={{
          background: '#940000',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 60px',
          fontWeight: 'Normal',
          fontSize: '1em',
        }}>
          <span style={{ flex: 1, textAlign: 'center' }}>
            Bientôt la Fête des Pères... faites-lui plaisir avec une Carte Cadeau !
          </span>
          <span
            style={{ marginLeft: 'auto', fontSize: '1.5em', cursor: 'pointer' }}
            onClick={() => setShowRedBar(false)}
            aria-label="Fermer"
            title="Fermer"
          >
            &times;
          </span>
        </div>
      ) : (
        <div className="GreyBar">
          <span style={{cursor: 'pointer'}}>
          <Link to="/" style={{ cursor: 'pointer', textDecoration: 'none'  }}>Essayez d'abord, payez aprés</Link> {/* Link to Home.js */} 
          </span>
          <span style={{ flex: 1, textAlign: 'center' }}>
          <Link to="/about">Livraison standard offerte à partir de 34,00 € et retours gratuits</Link>
          </span>
          <span>
           <Link to="/Contact"> Retour sous 30 jours</Link> {/* Link to About.js */}
          </span>
        </div>
      )}
    </>
  );
};

export default TopBar;