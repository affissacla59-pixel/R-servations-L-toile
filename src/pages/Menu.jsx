import { useState } from 'react';

const MENU_DATA = [
  // ENTRESS
  {
    id: 1,
    name: "Pastels Gourmandes au Thon",
    category: "entrees",
    price: "3 500 FCFA",
    badge: "Populaire",
    isSpicy: true,
    isVeggie: false,
    rating: 4.9,
    desc: "Beignets dorés et croustillants farcis au thon braisé aux herbes, accompagnés d'une sauce pimentée maison.",
    ingredients: ["Thon frais", "Pâte artisanale", "Oignons caramélisés", "Sauce piment-tomate"],
    pairing: "Cocktail Bissap Hibiscus",
    img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Salade Fraîcheur Mangue & Avocat",
    category: "entrees",
    price: "3 000 FCFA",
    badge: "Nouveau",
    isSpicy: false,
    isVeggie: true,
    rating: 4.8,
    desc: "Dés de mangue du terroir, avocat fondant, crevettes grillées et vinaigrette maracudja.",
    ingredients: ["Mangue", "Avocat", "Crevettes", "Pousse de coriandre", "Passion"],
    pairing: "Eau de Coco Fraîche",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },

  // PLATS PRINCIPAUX
  {
    id: 3,
    name: "Atassi Royal de la Cité",
    category: "plats",
    price: "6 500 FCFA",
    badge: "Spécialité du Chef",
    isSpicy: true,
    isVeggie: false,
    rating: 5.0,
    desc: "Harmonie parfaite de riz et haricots rouges sautés au jus de viande, servi avec mérou frit et friture Djédja.",
    ingredients: ["Riz parfumé", "Haricots rouges", "Poisson Mérou", "Sauce Djédja", "Œuf poché"],
    pairing: "Jus de Gingembre Ananas",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Poulet Bicyclette Braisé au Feu de Bois",
    category: "plats",
    price: "7 000 FCFA",
    badge: "Incontournable",
    isSpicy: true,
    isVeggie: false,
    rating: 4.9,
    desc: "Demi-poulet local mariné pendant 12h aux épices africaines, braisé à la perfection avec frites d'aloco.",
    ingredients: ["Poulet bicyclette", "Marinade secret chef", "Banane plantain (Aloco)", "Piment vert"],
    pairing: "Bière Locale Fraîche",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Brochettes de Capitaine & Sauce Moyo",
    category: "plats",
    price: "8 000 FCFA",
    badge: null,
    isSpicy: false,
    isVeggie: false,
    rating: 4.7,
    desc: "Filet de capitaine grillé en brochettes avec poivrons, servi avec sauce moyo fraîche et igname frite.",
    ingredients: ["Poisson Capitaine", "Poivrons", "Oignons crus", "Tomates", "Igname"],
    pairing: "Vin Blanc Sec",
    img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
  },

  // DESSERTS
  {
    id: 6,
    name: "Fondant au Chocolat & Piment Doux",
    category: "desserts",
    price: "3 500 FCFA",
    badge: "Gourmand",
    isSpicy: false,
    isVeggie: true,
    rating: 4.9,
    desc: "Cœur coulant au chocolat noir 70% sublimé par une pointe de piment doux, glace vanille bourbon.",
    ingredients: ["Chocolat noir", "Piment doux", "Glace vanille", "Eclats de cacao"],
    pairing: "Café Expresso",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Carpaccio de Ananas Rôti au Miel",
    category: "desserts",
    price: "2 500 FCFA",
    badge: "Léger",
    isSpicy: false,
    isVeggie: true,
    rating: 4.8,
    desc: "Fines tranches d'ananas du Bénin infusées au miel de baobab, menthe fraîche et sorbet citron vert.",
    ingredients: ["Ananas Pain de Sucre", "Miel pur", "Sorbet citron", "Menthe"],
    pairing: "Thé Vert à la Menthe",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  },

  // BOISSONS
  {
    id: 8,
    name: "Signature Bissap Royale",
    category: "boissons",
    price: "2 000 FCFA",
    badge: "Maison",
    isSpicy: false,
    isVeggie: true,
    rating: 5.0,
    desc: "Infusion d'fleurs d'hibiscus, menthe poivrée, zestes d'orange et essence de vanille.",
    ingredients: ["Fleurs d'hibiscus", "Menthe", "Orange", "Sucre de canne"],
    pairing: "Accompagne tous les plats",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtrage combiné par Catégorie et Recherche
  const filteredMenu = MENU_DATA.filter(item => {
    const matchesCategory = activeCategory === 'tous' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* 1. HERO SECTION MENU — même structure/comportement que Home et About (min-height 90vh, fond fixe/parallax au scroll) */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.95) 100%), url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80")',
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
            <i className="bi bi-stars" style={{ fontSize: '16px' }}></i> Expérience Gastronomique
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 68px)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-1px',
            color: '#fff'
          }}>
            Notre <span style={{ color: '#dfb15b', fontStyle: 'italic' }}>Carte</span> & Créations
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#ccc',
            lineHeight: '1.7',
            marginBottom: '36px',
            maxWidth: '620px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Chaque plat est une célébration des saveurs africaines revisitées avec précision, passion et des ingrédients locaux d'exception.
          </p>

          {/* BARRE DE RECHERCHE */}
          <div style={{
            position: 'relative',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <i className="bi bi-search" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#777', fontSize: '20px' }}></i>
            <input
              type="text"
              placeholder="Rechercher un plat, un ingrédient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px 14px 48px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid #333',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 80px' }}>
        
        {/* 2. ONGLETS DE CATÉGORIES */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          margin: '60px 0 50px', 
          flexWrap: 'wrap' 
        }}>
          {[
            { id: 'tous', label: 'Toute la Carte' },
            { id: 'entrees', label: 'Entrées' },
            { id: 'plats', label: 'Plats Principaux' },
            { id: 'desserts', label: 'Desserts' },
            { id: 'boissons', label: 'Boissons & Cocktails' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '12px 26px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: activeCategory === cat.id ? '1px solid #dfb15b' : '1px solid #222',
                backgroundColor: activeCategory === cat.id ? '#dfb15b' : '#181818',
                color: activeCategory === cat.id ? '#0f0f0f' : '#aaa'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. GRILLE DES PLATS */}
        {filteredMenu.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
            <p style={{ fontSize: '18px' }}>Aucun plat ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: '35px' 
          }}>
            {filteredMenu.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  backgroundColor: '#161616',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #262626',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#dfb15b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#262626';
                }}
              >
                {/* IMAGE & BADGES */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(22,22,22,1), transparent 70%)' }} />

                  {item.badge && (
                    <span style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      backgroundColor: '#dfb15b',
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '11px',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      textTransform: 'uppercase'
                    }}>
                      {item.badge}
                    </span>
                  )}

                  {/* INDICATEURS RÉGIME */}
                  <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '6px' }}>
                    {item.isSpicy && (
                      <span title="Épicé" style={{ backgroundColor: 'rgba(239, 68, 68, 0.8)', padding: '6px', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                        <i className="bi bi-fire" style={{ fontSize: '14px' }}></i>
                      </span>
                    )}
                    {item.isVeggie && (
                      <span title="Végétarien" style={{ backgroundColor: 'rgba(34, 197, 94, 0.8)', padding: '6px', borderRadius: '50%', color: '#fff', display: 'flex' }}>
                        <i className="bi bi-leaf" style={{ fontSize: '14px' }}></i>
                      </span>
                    )}
                  </div>
                </div>

                {/* CONTENU */}
                <div style={{ padding: '0 24px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h3 style={{ margin: 0, color: '#fff', fontSize: '20px', fontWeight: '600' }}>{item.name}</h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#dfb15b', fontSize: '13px', marginBottom: '12px' }}>
                      <i className="bi bi-star-fill" style={{ fontSize: '14px' }}></i>
                      <span>{item.rating}</span>
                    </div>

                    <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #222' }}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#dfb15b' }}>{item.price}</span>
                    <span style={{ color: '#aaa', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Détails <i className="bi bi-chevron-right" style={{ fontSize: '14px' }}></i>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. BANNER OFFRE SPÉCIALE */}
        <div style={{
          marginTop: '80px',
          padding: '40px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #1f1a0e 0%, #121212 100%)',
          border: '1px solid #3d3118',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dfb15b', marginBottom: '10px' }}>
              <i className="bi bi-stars" style={{ fontSize: '20px' }}></i>
              <span style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px' }}>Menu Dégustation</span>
            </div>
            <h2 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '28px' }}>Menu Prestige à 18 000 FCFA</h2>
            <p style={{ color: '#aaa', margin: 0, maxWidth: '500px' }}>Entrée, Plat et Dessert au choix du Chef avec un cocktail de bienvenue offert tous les vendredis soirs.</p>
          </div>
          <a href="/contact" className="btn" style={{ padding: '14px 28px' }}>Réserver ce Menu</a>
        </div>

      </div>

      {/* 5. MODAL / POP-UP DÉTAILS DU PLAT */}
      {selectedItem && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#181818',
            border: '1px solid #333',
            borderRadius: '20px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button 
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10
              }}
            >
              <i className="bi bi-x-lg" style={{ fontSize: '20px' }}></i>
            </button>

            <img src={selectedItem.img} alt={selectedItem.name} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />

            <div style={{ padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h2 style={{ color: '#fff', margin: 0, fontSize: '24px' }}>{selectedItem.name}</h2>
                <span style={{ color: '#dfb15b', fontSize: '22px', fontWeight: 'bold' }}>{selectedItem.price}</span>
              </div>

              <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '25px' }}>{selectedItem.desc}</p>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#dfb15b', margin: '0 0 10px 0', fontSize: '14px', textTransform: 'uppercase' }}>Ingrédients Principaux</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedItem.ingredients.map((ing, idx) => (
                    <span key={idx} style={{ backgroundColor: '#222', color: '#aaa', padding: '6px 14px', borderRadius: '15px', fontSize: '13px' }}>
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#111', padding: '15px', borderRadius: '10px', borderLeft: '3px solid #dfb15b' }}>
                <span style={{ color: '#888', fontSize: '12px', display: 'block', marginBottom: '4px' }}>ACCORD PARFAIT CONSEILLÉ</span>
                <span style={{ color: '#fff', fontWeight: '500' }}>{selectedItem.pairing}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}