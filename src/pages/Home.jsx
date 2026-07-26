import { useState } from 'react';
import { Link } from 'react-router-dom';

// Données des plats vedettes
const FEATURED_DISHP = [
  {
    id: 1,
    title: "Atassi Royal au Poisson Frit",
    tag: "Incontournable",
    desc: "Riz et haricots mijotés aux épices douces, accompagnés de leur sauce pimentée maison et dorade croustillante.",
    price: "4 500 FCFA",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Poulet Bicyclette Braisé",
    tag: "Spécialité du Chef",
    desc: "Mariné pendant 24h aux herbes africaines, braisé au feu de bois de manguier. Servi avec aloko ou agbeli.",
    price: "6 000 FCFA",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Filet de Capitaine Sauce Moyo",
    tag: "Nouveauté",
    desc: "Capitaine frais de la lagune, grillé à la perfection et accompagné d'une brunoise de tomates et piments frais.",
    price: "7 500 FCFA",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
  }
];

// Données des avis clients
const TESTIMONIALS = [
  {
    id: 1,
    name: "Aurore Dossou",
    role: "Critique Gastronomique",
    text: "Une explosion de saveurs du terroir avec un dressage digne des plus grands étoilés. L'Atassi Royal est tout simplement divin !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Jean-Philippe Kora",
    role: "Client Fidèle",
    text: "Cadre d'exception à la Haie Vive. Le service est discret, attentionné, et la marinade du poulet braisé est un secret très bien gardé !",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Marie-Claire Bio",
    role: "Organisatrice d'Événements",
    text: "Nous y avons fêté l'anniversaire de notre entreprise. Le salon privé et la formule traiteur ont bluffé tous nos invités.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION (Bannière d'accueil) */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.95) 100%), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '80px 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '750px' }}>
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
              <i className="bi bi-stars" style={{ fontSize: '16px' }}></i> Haute Gastronomie Béninoise
            </div>

            <h1 style={{ 
              fontSize: 'clamp(40px, 6vw, 68px)', 
              fontWeight: '800', 
              lineHeight: '1.1', 
              marginBottom: '24px',
              letterSpacing: '-1px'
            }}>
              Une expérience culinaire <span style={{ color: '#dfb15b', fontStyle: 'italic' }}>inoubliable</span> au cœur de Cotonou.
            </h1>

            <p style={{ 
              fontSize: '18px', 
              color: '#ccc', 
              lineHeight: '1.7', 
              marginBottom: '36px',
              maxWidth: '620px'
            }}>
              L'Étoile Bénin revisite les recettes ancestrales de notre terroir avec l'élégance et le raffinement de la haute cuisine contemporaine.
            </p>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '16px' }}>
                <i className="bi bi-calendar3" style={{ fontSize: '18px' }}></i> Réserver une Table
              </Link>
              <Link to="/menu" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '16px 32px', 
                backgroundColor: 'transparent', 
                border: '1px solid rgba(255,255,255,0.3)', 
                color: '#fff', 
                borderRadius: '4px', 
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                Explorer le Menu <i className="bi bi-chevron-right" style={{ fontSize: '18px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFOS RAPIDES BAR (Chiffres & Accès) */}
      <section style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a', padding: '30px 0' }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '20px', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <i className="bi bi-clock" style={{ fontSize: '32px', color: '#dfb15b' }}></i>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>Heures d'ouverture</h4>
              <p style={{ margin: '4px 0 0', color: '#888', fontSize: '14px' }}>Mar - Dim : 12h00 - 23h00</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <i className="bi bi-egg-fried" style={{ fontSize: '32px', color: '#dfb15b' }}></i>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>Cuisine Locale & Bio</h4>
              <p style={{ margin: '4px 0 0', color: '#888', fontSize: '14px' }}>100% Ingrédients du marché</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <i className="bi bi-telephone-outbound" style={{ fontSize: '32px', color: '#dfb15b' }}></i>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>Réservation directe</h4>
              <p style={{ margin: '4px 0 0', color: '#888', fontSize: '14px' }}>+229 01 00 00 00 00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENTS ET VALEURS */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            <h2 style={{ color: '#dfb15b', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>L'Excellence au quotidien</h2>
            <h3 style={{ fontSize: '32px', margin: 0 }}>Pourquoi dîner à L'Étoile Bénin ?</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '40px 30px', borderRadius: '8px', border: '1px solid #2a2a2a', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: 'rgba(223,177,91,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#dfb15b' }}>
                <i className="bi bi-award" style={{ fontSize: '36px' }}></i>
              </div>
              <h3 style={{ marginBottom: '15px' }}>Chef Passionné</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', margin: 0 }}>Formé auprès des meilleurs maîtres cuisiniers, notre chef marie créativité internationale et respect des traditions.</p>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '40px 30px', borderRadius: '8px', border: '1px solid #2a2a2a', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: 'rgba(223,177,91,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#dfb15b' }}>
                <i className="bi bi-shield-check" style={{ fontSize: '36px' }}></i>
              </div>
              <h3 style={{ marginBottom: '15px' }}>Produits Ultra-Frais</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', margin: 0 }}>Nous achetons nos épices, légumes et poissons chaque matin directement auprès des producteurs et pêcheurs locaux.</p>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '40px 30px', borderRadius: '8px', border: '1px solid #2a2a2a', textAlign: 'center' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: 'rgba(223,177,91,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#dfb15b' }}>
                <i className="bi bi-heart-fill" style={{ fontSize: '36px' }}></i>
              </div>
              <h3 style={{ marginBottom: '15px' }}>Cadre Privilégié</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', margin: 0 }}>Un espace climatisé, une terrasse ombragée et une ambiance musicale feutrée pensée pour la sérénité de nos hôtes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLATS VEDETTES (MENU SNAPSHOT) */}
      <section style={{ backgroundColor: '#161616', padding: '90px 0', borderTop: '1px solid #222' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 style={{ color: '#dfb15b', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>Sélection du Moment</h2>
              <h3 style={{ fontSize: '32px', margin: 0 }}>Les Signatures du Chef</h3>
            </div>
            <Link to="/menu" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid #dfb15b', color: '#dfb15b' }}>
              Voir toute la carte
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {FEATURED_DISHP.map((dish) => (
              <div key={dish.id} style={{ 
                backgroundColor: '#1a1a1a', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid #2a2a2a',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'relative', height: '230px' }}>
                  <img src={dish.img} alt={dish.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ 
                    position: 'absolute', 
                    top: '15px', 
                    right: '15px', 
                    backgroundColor: 'rgba(18,18,18,0.85)', 
                    color: '#dfb15b', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {dish.tag}
                  </span>
                </div>
                <div style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '20px', margin: 0, fontWeight: '700' }}>{dish.title}</h3>
                    <span style={{ color: '#dfb15b', fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap', marginLeft: '10px' }}>{dish.price}</span>
                  </div>
                  <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{dish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HISTOIRE ET SAVOIR-FAIRE */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
                alt="Salle de restaurant" 
                style={{ width: '100%', borderRadius: '12px', border: '1px solid #333' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-25px', 
                right: '-25px', 
                backgroundColor: '#dfb15b', 
                color: '#121212', 
                padding: '25px', 
                borderRadius: '12px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                display: 'none', // S'affichera automatiquement sur grands écrans
                smDisplay: 'block'
              }}>
                <span style={{ fontSize: '36px', display: 'block', lineHeight: '1' }}>5+</span>
                <span style={{ fontSize: '14px', textTransform: 'uppercase' }}>Années d'Excellence</span>
              </div>
            </div>

            <div>
              <h2 style={{ color: '#dfb15b', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>L'Esprit du Lieu</h2>
              <h3 style={{ fontSize: '36px', marginBottom: '20px', lineHeight: '1.2' }}>Là où le patrimoine béninois rencontre la modernité.</h3>
              <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '20px' }}>
                Créé en 2021, L'Étoile Bénin est né d'un constat simple : la richesse aromatique de la cuisine béninoise mérite une tribune d'exception. 
              </p>
              <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '30px' }}>
                Que ce soit pour un déjeuner d'affaires confidentiel ou un dîner romantique aux chandelles, chaque espace de notre établissement a été pensé pour vous procurer confort et dépaysement gustatif.
              </p>
              <Link to="/a-propos" style={{ color: '#dfb15b', fontWeight: 'bold', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                En savoir plus sur notre histoire <i className="bi bi-chevron-right" style={{ fontSize: '16px' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ÉVÉNEMENTIEL & SERVICE TRAITEUR */}
      <section style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        borderTop: '1px solid #2a2a2a',
        borderBottom: '1px solid #2a2a2a'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ color: '#dfb15b', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px' }}>Événements Privés</h2>
          <h3 style={{ fontSize: '36px', marginBottom: '20px' }}>Privatisez L'Étoile Bénin pour vos Réceptions</h3>
          <p style={{ color: '#ccc', fontSize: '17px', lineHeight: '1.7', marginBottom: '35px' }}>
            Mariages, banquets d'entreprise, cocktails d'affaires ou anniversaires : profitez de nos espaces modulables et d'un service traiteur sur-mesure pour marquer les esprits de vos invités.
          </p>
          <Link to="/contact" className="btn" style={{ padding: '15px 35px' }}>
            Demander un Devis Gratuit
          </Link>
        </div>
      </section>

      {/* 7. TEMOIGNAGES CLIENTS */}
      <section style={{ padding: '90px 0', backgroundColor: '#161616' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <i className="bi bi-quote" style={{ fontSize: '48px', color: '#dfb15b', opacity: 0.5, marginBottom: '20px', display: 'inline-block' }}></i>
          
          <h2 style={{ color: '#dfb15b', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>L'Avis de nos Hôtes</h2>

          <div style={{ minHeight: '180px' }}>
            <p style={{ fontSize: '20px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '25px', color: '#eee' }}>
              "{TESTIMONIALS[activeTestimonial].text}"
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '15px' }}>
              {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                <i key={i} className="bi bi-star-fill" style={{ fontSize: '18px', color: '#dfb15b' }}></i>
              ))}
            </div>

            <h4 style={{ margin: 0, fontSize: '18px' }}>{TESTIMONIALS[activeTestimonial].name}</h4>
            <span style={{ color: '#777', fontSize: '14px' }}>{TESTIMONIALS[activeTestimonial].role}</span>
          </div>

          {/* Navigation Témoignages */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
            {TESTIMONIALS.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                style={{
                  width: activeTestimonial === index ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: activeTestimonial === index ? '#dfb15b' : '#444',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION (Réservation finale) */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: '#1a1a1a', 
            padding: '60px 30px', 
            borderRadius: '16px', 
            border: '1px solid #dfb15b',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}>
            <h2 style={{ fontSize: '36px', marginBottom: '15px' }}>Prêt à vivre une expérience unique ?</h2>
            <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '550px', margin: '0 auto 30px' }}>
              Les tables partent vite pour le service du soir. Réservez la vôtre dès maintenant en ligne.
            </p>
            <Link to="/contact" className="btn" style={{ padding: '16px 36px', fontSize: '18px' }}>
              Réserver ma table
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}