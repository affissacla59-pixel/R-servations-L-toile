import { Clock, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a0a0a', padding: '40px 0', marginTop: '60px', borderTop: '1px solid #2a2a2a' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', color: '#aaa' }}>
        <div>
          <h3 style={{ color: '#dfb15b', marginBottom: '15px' }}>L'Étoile Bénin</h3>
          <p>Une expérience gastronomique unique alliant tradition et modernité au cœur de Cotonou.</p>
        </div>
        <div>
          <h3 style={{ color: '#dfb15b', marginBottom: '15px' }}>Horaires</h3>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> Mar - Dim : 12h00 - 23h00</p>
          <p style={{ marginLeft: '24px' }}>Lundi : Fermé</p>
        </div>
        <div>
          <h3 style={{ color: '#dfb15b', marginBottom: '15px' }}>Contact</h3>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Haie Vive, Cotonou, Bénin</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={16} /> +229 01 00 00 00 00</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #1a1a1a', fontSize: '14px', color: '#555' }}>
        &copy; 2026 L'Étoile Bénin. Tous droits réservés.
      </div>
    </footer>
  );
}