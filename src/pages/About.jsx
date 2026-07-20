import { Award, HeartHandshake, Leaf, ShieldCheck, Flame, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#f9f9f9', paddingBottom: '80px' }}>
      
      {/* 1. HERO SECTION AVEC BANNIÈRE HAUTE DÉFINITION */}
      <div 
        style={{ 
          height: '420px', 
          background: 'linear-gradient(180deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.95) 100%), url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: '#dfb15b', textTransform: 'uppercase', tracking: '2px', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px' }}>
            L'Art de la Haute Gastronomie
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '15px 0', lineHeight: '1.2' }}>
            Notre Passion pour le Goût
          </h1>
          <p style={{ fontSize: '18px', color: '#cccccc', margin: '0 auto', maxWidth: '650px', lineHeight: '1.6' }}>
            Une rencontre subtile entre l'héritage culinaire ouest-africain et la finesse de la cuisine contemporaine.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        
        {/* 2. SECTION HISTOIRE & DÉCOUVERTE (Composition d'images) */}
        <section style={{ padding: '60px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
            
            {/* Colonne Texte */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#dfb15b', marginBottom: '10px' }}>
                <Sparkles size={20} />
                <span style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '13px' }}>Notre Origine</span>
              </div>
              <h2 style={{ fontSize: '36px', color: '#fff', marginBottom: '20px', lineHeight: '1.3' }}>
                L'histoire d'une quête d'excellence à Cotonou
              </h2>
              <p style={{ lineHeight: '1.8', color: '#aaaaaa', marginBottom: '20px', fontSize: '16px' }}>
                Fondé en 2021 au cœur de la Haie Vive, <strong>L'Étoile Bénin</strong> est né d'un rêve audacieux : redonner à nos produits du terroir béninois la place d'honneur qu'ils méritent dans la grande gastronomie mondiale.
              </p>
              <p style={{ lineHeight: '1.8', color: '#aaaaaa', marginBottom: '30px', fontSize: '16px' }}>
                Chaque matin, nos équipes sélectionnent rigoureusement les épices brutes, les aromates sauvages et les produits de la mer auprès des producteurs locaux. Nous combinons des techniques de cuisson ancestrales au feu de bois avec un dressage moderne et raffiné.
              </p>
              
              <div style={{ borderLeft: '3px solid #dfb15b', paddingLeft: '20px', fontStyle: 'italic', color: '#dddddd' }}>
                « Cuisiner n'est pas seulement nourrir, c'est raconter une histoire et créer un souvenir inoubliable à chaque bouchée. »
              </div>
            </div>

            {/* Mosaïque d'images interactives */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
                alt="Ambiance restaurant" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #2a2a2a' }} 
              />
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
                alt="Plat gastronomique" 
                style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px', border: '1px solid #2a2a2a', marginTop: '30px' }} 
              />
            </div>

          </div>
        </section>

        {/* 3. SECTION CHIFFRES CLÉS (Statistiques) */}
        <section style={{ backgroundColor: '#1a1a1a', padding: '40px 30px', borderRadius: '16px', border: '1px solid #2a2a2a', margin: '40px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#dfb15b' }}>5+</div>
              <div style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Années d'Excellence</div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#dfb15b' }}>100%</div>
              <div style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Produits Frais & Locaux</div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#dfb15b' }}>15k+</div>
              <div style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Clients Émerveillés</div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '800', color: '#dfb15b' }}>3</div>
              <div style={{ color: '#aaa', fontSize: '14px', marginTop: '5px' }}>Distinctions Culinaire</div>
            </div>
          </div>
        </section>

        {/* 4. SECTION LE CHEF & SON ÉQUIPE */}
        <section style={{ padding: '60px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px', alignItems: 'center' }}>
            
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" 
                alt="Notre Chef Executive" 
                style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '16px', border: '1px solid #2a2a2a' }} 
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(18,18,18,0.9)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid #333' }}>
                <h3 style={{ margin: 0, color: '#dfb15b' }}>Chef Rodrigue Dossou</h3>
                <p style={{ margin: '5px 0 0 0', color: '#aaa', fontSize: '14px' }}>Chef Exécutif & Fondateur</p>
              </div>
            </div>

            <div>
              <div style={{ color: '#dfb15b', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px', marginBottom: '10px' }}>
                Manoir de la Créativité
              </div>
              <h2 style={{ fontSize: '36px', color: '#fff', marginBottom: '20px' }}>
                Un chef habité par la passion du terroir
              </h2>
              <p style={{ lineHeight: '1.8', color: '#aaaaaa', marginBottom: '20px' }}>
                Formé dans les plus prestigieuses maisons d'Afrique de l'Ouest et d'Europe, le Chef Rodrigue réinvente les recettes de nos grand-mères avec une maîtrise technique d'exception.
              </p>
              <p style={{ lineHeight: '1.8', color: '#aaaaaa', marginBottom: '25px' }}>
                Son ambition ? Offrir une véritable expérience sensorielle où les textures, les parfums et les visuels éveillent la mémoire gustative de nos hôtes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#dddddd' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Flame size={18} color="#dfb15b" /> Cuissons maîtrisées au feu de bois
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Leaf size={18} color="#dfb15b" /> Épices bios récoltées à la main
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={18} color="#dfb15b" /> Carte renouvelée à chaque saison
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* 5. NOS VALEURS FONDAMENTALES (Cartes) */}
        <section style={{ padding: '40px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', color: '#dfb15b', marginBottom: '10px' }}>Nos Engagements</h2>
            <p style={{ color: '#aaa', maxWidth: '500px', margin: '0 auto' }}>Les piliers sur lesquels repose chacune de nos créations quotidiennes.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            
            <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #2a2a2a', transition: 'transform 0.3s ease' }}>
              <div style={{ color: '#dfb15b', marginBottom: '15px' }}><Leaf size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>100% Circuit Court</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '14px', margin: 0 }}>
                Nous soutenons directement plus de 12 maraîchers et pêcheurs de la région pour vous garantir une fraîcheur absolue.
              </p>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #2a2a2a' }}>
              <div style={{ color: '#dfb15b', marginBottom: '15px' }}><ShieldCheck size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Qualité Récompense</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '14px', margin: 0 }}>
                Aucun additif ni produit industriel. Nos jus, sauces et assaisonnements sont intégralement préparés maison.
              </p>
            </div>

            <div style={{ backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px', border: '1px solid #2a2a2a' }}>
              <div style={{ color: '#dfb15b', marginBottom: '15px' }}><HeartHandshake size={32} /></div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Hospitalité Béninoise</h3>
              <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '14px', margin: 0 }}>
                Vous recevoir comme des invités de marque. Notre service attentionné garantit un moment de convivialité pure.
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}