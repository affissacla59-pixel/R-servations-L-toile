import { useState } from 'react';

export default function Contact() {
  // 💡 REMPLACE CETTE URL PAR TON LIEN FORMSPREE PERSONNALISÉ
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/moqgbeaw";

  // 💡 Numéro WhatsApp du restaurant au format international (sans + ni espaces)
  // Bénin (+229) : le "01" fait partie du numéro depuis la réforme de numérotation
  const WHATSAPP_NUMBER = "2290145340543";

  // Construit le message pré-rempli envoyé sur WhatsApp
  const buildWhatsAppMessage = (data) => {
    const lines = [
      "🍽️ *Nouvelle demande de réservation — L'Étoile Bénin*",
      "",
      `👤 Nom : ${data.name}`,
      `📧 E-mail : ${data.email}`,
      `📞 Téléphone : ${data.phone}`,
      `📅 Date : ${data.date}`,
      `🕐 Heure : ${data.time}`,
      `👥 Couverts : ${data.guests}`,
    ];
    if (data.notes) {
      lines.push(`📝 Remarques : ${data.notes}`);
    }
    return lines.join("\n");
  };

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

    // 1) WhatsApp est le canal principal et fiable : on l'ouvre toujours,
    //    indépendamment du résultat de l'envoi e-mail ci-dessous.
    const message = buildWhatsAppMessage(form);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
    setForm({ name: '', email: '', phone: '', date: '', time: '19:30', guests: '2', notes: '' });

    // 2) Envoi e-mail (Formspree) en complément, sans bloquer ni faire
    //    échouer la réservation si ce service n'est pas configuré.
    try {
      await fetch(FORMSPREE_ENDPOINT, {
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
    } catch (err) {
      // On ignore silencieusement : WhatsApp reste le canal de confirmation garanti.
      console.warn("Envoi e-mail Formspree échoué (non bloquant) :", err);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', color: '#f9f9f9', minHeight: '100vh', overflowX: 'hidden' }}>

      <style>{`
        .contact-main-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          align-items: start;
        }
        .contact-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .contact-grid-3 {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 12px;
        }
        .contact-input {
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 640px) {
          .contact-grid-2 {
            grid-template-columns: 1fr;
          }
          .contact-grid-3 {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .contact-hero-padding {
            padding: 60px 16px !important;
          }
          .contact-form-card {
            padding: 22px !important;
          }
        }
      `}</style>

      {/* 1. HERO SECTION — même structure/comportement que Home, About et Menu (min-height 90vh, fond fixe/parallax au scroll) */}
      <section className="contact-hero-padding" style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.95) 100%), url("https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '80px 20px'
      }}>
        <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            backgroundColor: 'rgba(223, 177, 91, 0.15)',
            border: '1px solid rgba(223, 177, 91, 0.4)',
            borderRadius: '30px',
            color: '#dfb15b',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            <i className="bi bi-stars" style={{ fontSize: '16px' }}></i> Réservation & Contact
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 68px)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-1px',
            color: '#fff'
          }}>
            Réservez Votre <span style={{ color: '#dfb15b', fontStyle: 'italic' }}>Table d'Exception</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#ccc',
            lineHeight: '1.7',
            maxWidth: '620px',
            margin: '0 auto'
          }}>
            Une expérience gastronomique inoubliable vous attend à L'Étoile Bénin. Remplissez le formulaire, puis confirmez votre réservation en un clic sur WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. SECTION PRINCIPALE (FORMULAIRE + INFOS) */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        <div className="contact-main-grid">

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
                  <i className="bi bi-geo-alt" style={{ fontSize: '22px' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>Adresse</h4>
                  <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>Haie Vive, Avenue de la Marina, Cotonou, Bénin</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <i className="bi bi-telephone" style={{ fontSize: '22px' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>Téléphone & WhatsApp</h4>
                  <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>+229 01 00 00 00 00</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <i className="bi bi-envelope" style={{ fontSize: '22px' }}></i>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>E-mail Direct</h4>
                  <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>affissacla59@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: '#2a2215', padding: '10px', borderRadius: '8px', color: '#dfb15b' }}>
                  <i className="bi bi-clock" style={{ fontSize: '22px' }}></i>
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
          <div className="contact-form-card" style={{
            backgroundColor: '#1a1a1a',
            padding: '35px',
            borderRadius: '12px',
            border: '1px solid #2a2a2a',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            boxSizing: 'border-box'
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
                <i className="bi bi-check-circle" style={{ fontSize: '24px' }}></i>
                <div>
                  <strong style={{ display: 'block', fontSize: '16px' }}>Demande prête à être envoyée !</strong>
                  <span style={{ fontSize: '13px', color: '#a5d6a7' }}>
                    Un onglet WhatsApp vient de s'ouvrir avec votre message de réservation pré-rempli : il ne vous reste qu'à appuyer sur "Envoyer" pour confirmer.
                  </span>
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
                <i className="bi bi-exclamation-circle" style={{ fontSize: '20px' }}></i>
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
                    width: '100%',
                    boxSizing: 'border-box',
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
              <div className="contact-grid-2">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
                  <label style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>E-mail *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="votre@email.com"
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})} 
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }} 
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
                  <label style={{ fontSize: '14px', color: '#ccc', fontWeight: '500' }}>Téléphone *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+229..."
                    value={form.phone} 
                    onChange={e => setForm({...form, phone: e.target.value})} 
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
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
              <div className="contact-grid-3">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
                  <label style={{ fontSize: '13px', color: '#ccc', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="bi bi-calendar3" style={{ fontSize: '14px' }}></i> Date
                  </label>
                  <input 
                    type="date" 
                    required 
                    value={form.date} 
                    onChange={e => setForm({...form, date: e.target.value})} 
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '12px 8px',
                      backgroundColor: '#121212',
                      border: '1px solid #333',
                      color: '#fff',
                      borderRadius: '6px',
                      outline: 'none'
                    }} 
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
                  <label style={{ fontSize: '13px', color: '#ccc', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="bi bi-clock" style={{ fontSize: '14px' }}></i> Heure
                  </label>
                  <select 
                    value={form.time} 
                    onChange={e => setForm({...form, time: e.target.value})}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
                  <label style={{ fontSize: '13px', color: '#ccc', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="bi bi-people" style={{ fontSize: '14px' }}></i> Couverts
                  </label>
                  <select 
                    value={form.guests} 
                    onChange={e => setForm({...form, guests: e.target.value})}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
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
                    width: '100%',
                    boxSizing: 'border-box',
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
                  width: '100%',
                  boxSizing: 'border-box',
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
                <i className="bi bi-send" style={{ fontSize: '18px' }}></i>
                {status === 'loading' ? 'Envoi de votre demande...' : 'Confirmer la Réservation'}
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}