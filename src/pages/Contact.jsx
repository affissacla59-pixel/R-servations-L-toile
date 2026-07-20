import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, Users, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  // 💡 REMPLACE CETTE URL PAR TON LIEN FORMSPREE PERSONNALISÉ
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/moqgbeaw";

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    notes: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nouvelle réservation de ${form.name}`,
          destinataire: "affissacla59@gmail.com",
          nom: form.name,
          email: form.email,
          telephone: form.phone,
          date: form.date,
          heure: form.time,
          couverts: form.guests,
          message: form.notes
        })
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', date: '', time: '19:30', guests: '2', notes: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* 1. HERO BANNER VISUELLE */}
      <div style={{
        position: 'relative',
        padding: '100px 20px',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(18,18,18,1)), url("https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#dfb15b', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            fontSize: '14px', 
            fontWeight: '600',
            marginBottom: '10px' 
          }}>
            <Sparkles size={16} /> Réservation & Contact
          </span>
          <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '15px', fontWeight: '800' }}>
            Réservez Votre Table d'Exception
          </h1>
          <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.6' }}>
            Une expérience gastronomique inoubliable vous attend à L'Étoile Bénin. Remplissez le formulaire, nous vous confirmerons la réservation par e-mail.
          </p>
        </div>
      </div>

      {/* 2. SECTION PRINCIPALE (FORMULAIRE + INFOS) */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>

          {/* COLONNE GAUCHE : CARTES D'INFORMATIONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            {/* Carte Visuelle d'ambiance */}
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #2a2a2a',
              position: 'relative',
              height: '200px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" 
                alt="Intérieur du restaurant" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px'
              }}>
                <p style={{ margin: 0, color: '#fff', fontWeight: '600', fontSize: '16px' }}>
                  Un cadre feutré et moderne au cœur de Cotonou
                </p>
              </div>
            </div>

            {/* Infos de Contact Direct */}
            <div style={{
              backgroundColor: '#1a1a1a',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #2a2a2a',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <h3 style={{ color: '#dfb15b', margin: '0 0 10px 0', fontSize: '20px' }}>Nos Coordonnées</h3>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>Adresse</h4>
                  <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>Haie Vive, Avenue de la Marina, Cotonou, Bénin</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>Téléphone & WhatsApp</h4>
                  <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>+229 01 00 00 00 00</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>E-mail Direct</h4>
                  <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>affissacla59@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>Horaires d'ouverture</h4>
                  <p style={{ margin: '0 0 3px 0', color: '#aaa', fontSize: '14px' }}>Mardi - Dimanche : 12h00 - 23h00</p>
                  <p style={{ margin: 0, color: '#666', fontSize: '13px' }}>Fermé le Lundi</p>
                </div>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE : FORMULAIRE PRO */}
          <div style={{
            backgroundColor: '#1a1a1a',
            padding: '35px',
            borderRadius: '12px',
            border: '1px solid #2a2a2a',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <h2 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '24px' }}>Formulaire de Réservation</h2>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '25px' }}>
              Les demandes reçues sont transmises instantanément à la direction.
            </p>

            {status === 'success' && (
              <div style={{
                backgroundColor: '#142918',
                border: '1px solid #2e7d32',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#4caf50'
              }}>
                <CheckCircle size={24} />
                <div>
                  <strong style={{ display: 'block', fontSize: '16px' }}>Demande envoyée avec succès !</strong>
                  <span style={{ fontSize: '13px', color: '#a5d6a7' }}>Un e-mail de confirmation vient d'être envoyé sur <strong>affissacla59@gmail.com</strong>.</span>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div style={{
                backgroundColor: '#331212',
                border: '1px solid #d32f2f',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#ef5350'
              }}>
                <AlertCircle size={20} />
                <span style={{ fontSize: '14px' }}>Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous appeler directement.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Nom complet */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>Nom Complet *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ex: Jean Dupont"
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  style={{
                    padding: '12px',
                    backgroundColor: '#121212',
                    border: '1px solid #333',
                    color: '#fff',
                    borderRadius: '6px',
                    outline: 'none'
                  }} 
                />
              </div>

              {/* Email & Téléphone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>E-mail *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="votre@email.com"
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})} 
                    style={{
                      padding: '12px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }} 
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>Téléphone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+229..."
                    value={form.phone} 
                    onChange={e => setForm({...form, phone: e.target.value})} 
                    style={{
                      padding: '12px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }} 
                  />
                </div>
              </div>

              {/* Date, Heure & Personnes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', color: '#ccc', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} /> Date
                  </label>
                  <input 
                    type="date" 
                    required 
                    value={form.date} 
                    onChange={e => setForm({...form, date: e.target.value})} 
                    style={{
                      padding: '12px 8px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }} 
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', color: '#ccc', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> Heure
                  </label>
                  <select 
                    value={form.time} 
                    onChange={e => setForm({...form, time: e.target.value})}
                    style={{
                      padding: '12px 8px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }}
                  >
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:30">20:30</option>
                    <option value="21:30">21:30</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', color: '#ccc', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={14} /> Couverts
                  </label>
                  <select 
                    value={form.guests} 
                    onChange={e => setForm({...form, guests: e.target.value})}
                    style={{
                      padding: '12px 8px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }}
                  >
                    <option value="1">1 pers.</option>
                    <option value="2">2 pers.</option>
                    <option value="4">4 pers.</option>
                    <option value="6">6+ pers.</option>
                  </select>
                </div>
              </div>

              {/* Message optionnel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>Remarques spéciales ou allergies (Optionnel)</label>
                <textarea 
                  rows="3" 
                  placeholder="Anniversaire, table près de la fenêtre..."
                  value={form.notes} 
                  onChange={e => setForm({...form, notes: e.target.value})} 
                  style={{
                    padding: '12px',
                    backgroundColor: '#121212',
                    border: '1px solid #333',
                    color: '#fff',
                    borderRadius: '6px',
                    resize: 'none',
                    outline: 'none'
                  }}
                ></textarea>
              </div>

              {/* Bouton de Soumission */}
              <button 
                type="submit" 
                disabled={status === 'loading'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  backgroundColor: '#dfb15b',
                  color: '#121212',
                  padding: '14px',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  transition: 'all 0.3s ease',
                  marginTop: '10px'
                }}
              >
                <Send size={18} />
                {status === 'loading' ? 'Envoi de votre demande...' : 'Confirmer la Réservation'}
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}