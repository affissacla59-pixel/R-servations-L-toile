import { Link } from 'react-router-dom';
import { Utensils, Menu as MenuIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid #2a2a2a', padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: 'bold', color: '#dfb15b' }}>
          <Utensils size={28} />
          <span>L'Étoile Bénin</span>
        </Link>
        
        <div style={{ display: 'flex', gap: '25px', fontSize: '16px', fontWeight: '500' }}>
          <Link to="/" style={{ hover: { color: '#dfb15b' } }}>Accueil</Link>
          <Link to="/menu">Notre Menu</Link>
          <Link to="/a-propos">À Propos</Link>
          <Link to="/contact">Contact & Réservation</Link>
        </div>
      </div>
    </nav>
  );
}