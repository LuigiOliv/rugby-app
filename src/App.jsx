import React, { useState } from 'react';

// --- TEMA E STILI AVANZATI ---
const theme = {
  primary: '#1b4332', // Verde Rugby Profondo
  secondary: '#d4af37', // Oro
  accent: '#c0392b', // Rosso fango/sangue
  danger: '#c0392b', // ✅ ADDED - same as accent
  bg: '#f0f2f5',
  white: '#ffffff',
  success: '#27ae60',
  warning: '#f39c12',
  text: '#2d3436',
  gray: '#636e72'
};

const styles = {
  container: {
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    backgroundColor: theme.bg,
    minHeight: '100vh',
    paddingBottom: '90px',
    color: theme.text
  },

  header: {
    background: `linear-gradient(135deg, ${theme.primary} 0%, #0d2119 100%)`,
    color: '#fff',
    padding: '30px 20px 25px',
    textAlign: 'center',
    borderBottomRightRadius: '30px',
    borderBottomLeftRadius: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
  },

  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '25px 15px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.text
  },

  card: {
    backgroundColor: theme.white,
    margin: '12px 15px',
    padding: '18px',
    borderRadius: '16px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },

  heroCard: {
    background: `linear-gradient(rgba(27, 67, 50, 0.92), rgba(13, 33, 25, 0.95)), url('https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=600')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: '24px',
    minHeight: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  // ✅ UNIFIED BUTTON STYLESS
  button: {
    backgroundColor: theme.secondary,
    border: 'none',
    padding: '14px 20px',
    borderRadius: '10px',
    color: theme.primary,
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
  },

  btnSmall: {
    backgroundColor: theme.secondary,
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    color: theme.primary,
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 6px rgba(212, 175, 55, 0.25)'
  },

  // ✅ NEW: Danger button variant
  btnDanger: {
    backgroundColor: theme.danger,
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    color: theme.white,
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 6px rgba(192, 57, 43, 0.25)'
  },

  // ✅ NEW: Success button variant
  btnSuccess: {
    backgroundColor: theme.success,
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    color: theme.white,
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 6px rgba(39, 174, 96, 0.25)'
  },

  tag: {
    fontSize: '10px',
    padding: '5px 10px',
    borderRadius: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: theme.white,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'inline-block'
  },

  // ✅ FIXED NAVIGATION - SAME SIZE TABS
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: theme.white,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: '0',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.12)',
    zIndex: 100,
    borderTop: '1px solid rgba(0,0,0,0.05)'
  },

  navItem: (active) => ({
    flex: '1',  // ✅ EQUAL WIDTH
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 8px',
    cursor: 'pointer',
    fontSize: '20px',
    textAlign: 'center',
    color: active ? theme.primary : theme.gray,
    fontWeight: active ? '700' : '500',
    transition: 'all 0.3s ease',
    backgroundColor: active ? 'rgba(27, 67, 50, 0.05)' : 'transparent',
    borderTop: active ? `3px solid ${theme.primary}` : '3px solid transparent',
    position: 'relative'
  }),

  navLabel: {
    fontSize: '11px',
    marginTop: '4px',
    fontWeight: '600',
    letterSpacing: '0.3px',
    whiteSpace: 'nowrap',  // ✅ ADDED - prevents text wrapping
    overflow: 'hidden',     // ✅ ADDED
    textOverflow: 'ellipsis' // ✅ ADDED
  },

  avatar: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    backgroundColor: theme.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    fontWeight: '700',
    fontSize: '16px',
    boxShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
  },

  statusBadge: (type) => ({
    fontSize: '11px',
    padding: '6px 14px',
    borderRadius: '20px',
    backgroundColor: type === 'secondary' ? theme.secondary :
      type === 'success' ? theme.success :
        type === 'warning' ? theme.warning : theme.primary,
    color: type === 'secondary' ? theme.primary : theme.white,
    fontWeight: '700',
    textTransform: 'uppercase',
    display: 'inline-block',
    letterSpacing: '0.5px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  }),

  categoryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid rgba(0,0,0,0.05)'
  },

  sponsorBanner: {
    margin: '25px 15px',
    padding: '12px',
    textAlign: 'center',
    border: `2px dashed ${theme.gray}20`,
    borderRadius: '12px',
    fontSize: '11px',
    color: theme.gray,
    backgroundColor: 'rgba(0,0,0,0.02)'
  }
};

export default function App() {
  const [tab, setTab] = useState('home');
  const [cat, setCat] = useState('Tutte');

  // --- MOCK DATA ---
  const matches = [
    { id: 1, home: "Old Lions", away: "Red Bulls", date: "Dom 15 Ott - 15:30", cat: "Seniores", field: "Campo Principale", score: "24-12" },
    { id: 2, home: "Viking ASD", away: "Old Lions", date: "Sab 21 Ott - 11:00", cat: "Under 16", field: "Stadio Comunale", score: null }
  ];

  const lastMatch = {
    teams: "Old Lions vs Red Bulls",
    cat: "Seniores",
    date: "Dom 15 Ott",
    score: "24-12"
  };

  const categoriesStatus = [
    { name: "Seniores", health: "success", issues: "✅ Tutti i documenti in regola" },
    { name: "Under 18", health: "warning", issues: "⚠️ 3 atleti senza certificato medico" },
    { name: "Under 16", health: "success", issues: "✅ Tutti i documenti in regola" },
    { name: "Under 14", health: "warning", issues: "⚠️ 2 atleti senza assicurazione" }
  ];

  const renderHome = () => (
    <>
      <div style={{ ...styles.card, ...styles.heroCard }}>
        <div style={styles.tag}>PROSSIMO MATCH</div>
        <h2 style={{ margin: '10px 0' }}>⚔️ {matches[1].home} vs {matches[1].away}</h2>
        <p style={{ fontSize: '14px' }}>📍 {matches[1].field} | 📅 {matches[1].date}</p>
        <button style={{ ...styles.button, marginTop: '10px' }} onClick={() => alert("Convocazione accettata!")}>ACCETTA CONVOCAZIONE</button>
      </div>

      <div style={styles.sectionTitle}>
        <span>Ultimi Risultati</span>
        <span style={{ fontSize: '12px', color: theme.primary }}>Vedi tutti</span>
      </div>
      <div style={styles.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', flex: 1 }}><b>Lions</b></div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', flex: 1, textAlign: 'center' }}>{matches[0].score}</div>
          <div style={{ textAlign: 'center', flex: 1 }}>Bulls</div>
        </div>
      </div>

      <div style={styles.sectionTitle}>News Societarie</div>
      <div style={{ ...styles.card, borderLeft: `5px solid ${theme.secondary}` }}>
        <h4>🍻 Terzo Tempo con Delitto</h4>
        <p style={{ fontSize: '13px', color: theme.gray }}>Sabato sera cena con delitto in club house. Prenota il tuo posto!</p>
      </div>

      <div style={styles.sponsorBanner}>
        PROMOSSO DA: <b>Birrificio Locale & Co.</b> 🍺
      </div>
    </>
  );

  const renderCalendar = () => (
    <div style={{ paddingBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', padding: '15px', overflowX: 'auto' }}>
        {['Tutte', 'Seniores', 'Under 18', 'Under 16', 'Minirugby'].map(c => (
          <button key={c} onClick={() => setCat(c)} style={{
            ...styles.btnSmall,
            padding: '10px 16px',
            width: 'auto',
            whiteSpace: 'nowrap',
            backgroundColor: cat === c ? theme.primary : theme.white,
            color: cat === c ? theme.white : theme.primary,
            border: `2px solid ${theme.primary}`,
            boxShadow: cat === c ? '0 2px 8px rgba(27, 67, 50, 0.3)' : 'none'
          }}>{c}</button>
        ))}
      </div>
      {matches.filter(m => cat === 'Tutte' || m.cat === cat).map(m => (
        <div key={m.id} style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={styles.tag}>{m.cat}</span>
            <span style={{ fontSize: '12px', color: theme.gray }}>{m.date}</span>
          </div>
          <h4 style={{ margin: '10px 0' }}>{m.home} vs {m.away}</h4>
          <div style={{ fontSize: '12px', color: theme.gray, marginBottom: '15px' }}>📍 {m.field}</div>

          {/* ✅ NEW: Presence confirmation buttons */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginTop: '15px',
            paddingTop: '15px',
            borderTop: '1px solid rgba(0,0,0,0.08)'
          }}>
            <button
              style={{ ...styles.btnSuccess, flex: 1 }}
              onClick={() => alert('✅ Presenza confermata!')}
            >
              ✅ CI SONO
            </button>
            <button
              style={{ ...styles.btnDanger, flex: 1 }}
              onClick={() => alert('❌ Assenza registrata')}
            >
              ❌ ASSENTE
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAdmin = () => (
    <div style={{ padding: '10px' }}>
      <div style={{ margin: '10px 15px' }}>
        <h3 style={{ margin: 0 }}>Stato Categorie</h3>
        <p style={{ fontSize: '12px', color: theme.gray, marginTop: '5px' }}>Monitoraggio rapido salute del club</p>
      </div>

      <div style={styles.card}>
        {categoriesStatus.map((c) => (
          <div key={c.name} style={styles.categoryRow}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{c.name}</div>
              <div style={{ fontSize: '11px', color: c.health === 'success' ? theme.success : theme.gray }}>
                {c.issues}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={styles.statusBadge(c.health)}>
                {c.health === 'success' ? 'OK' : 'ATTENZIONE'}
              </span>
              {c.health !== 'success' && (
                <div style={{ marginTop: '5px' }}>
                  <button style={styles.btnSmall} onClick={() => alert(`Dettaglio ${c.name} aperto`)}>GESTISCI</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...styles.card, borderLeft: `5px solid ${theme.danger}` }}>
        <h4 style={{ margin: 0, color: theme.danger }}>⚠️ Urgenze</h4>
        <p style={{ fontSize: '13px' }}>Ci sono <b>7 atleti</b> totali che non possono scendere in campo questa domenica per documenti mancanti.</p>
        <button style={{ ...styles.btnDanger, width: '100%', marginTop: '10px' }}>
          INVIA SOLLECITO AUTOMATICO
        </button>
      </div>
    </div>
  );

  const renderVoting = () => (
    <div style={{ padding: '10px' }}>
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <span style={styles.statusBadge('secondary')}>Votazione Aperta</span>
        <h3 style={{ margin: '10px 0' }}>Man of the Match 🏆</h3>
        <p style={{ fontSize: '13px', color: theme.gray }}>Partita: <b>{lastMatch.teams}</b><br />Categoria: <b>{lastMatch.cat}</b></p>
      </div>

      <div style={styles.card}>
        <p style={{ fontSize: '12px', textAlign: 'center', marginBottom: '15px' }}>Chi è stato il miglior Leone in campo?</p>
        {["G. Bergamasco", "S. Parisse", "M. Castrogiovanni"].map((p, i) => (
          <div key={p} style={{ ...styles.categoryRow, borderBottom: i === 2 ? 'none' : '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: theme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>🏉</div>
              <b>{p}</b>
            </div>
            <button style={{ ...styles.btnSmall, backgroundColor: theme.secondary, color: theme.primary }} onClick={() => alert("Grazie per aver votato!")}>VOTA</button>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '11px', color: theme.gray, textAlign: 'center', padding: '0 20px' }}>
        Nota: Le votazioni chiudono 24h dopo il fischio finale. Solo chi era presente alla partita può votare.
      </p>
    </div>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={{ fontSize: '12px', letterSpacing: '2px', opacity: 0.8 }}>RUGBY CLUB</div>
        <h1 style={{ margin: '5px 0', fontSize: '28px' }}>OLD LIONS 🦁</h1>
      </header>

      {tab === 'home' && renderHome()}
      {tab === 'cal' && renderCalendar()}
      {tab === 'vote' && renderVoting()}
      {tab === 'admin' && renderAdmin()}

      <nav style={styles.nav}>
        <div onClick={() => setTab('home')} style={styles.navItem(tab === 'home')}>
          <span style={{ fontSize: '22px' }}>🏠</span>
          <span style={styles.navLabel}>Home</span>
        </div>
        <div onClick={() => setTab('cal')} style={styles.navItem(tab === 'cal')}>
          <span style={{ fontSize: '22px' }}>📅</span>
          <span style={styles.navLabel}>Calendar</span>  {/* ✅ CHANGED from Match */}
        </div>
        <div onClick={() => setTab('vote')} style={styles.navItem(tab === 'vote')}>
          <span style={{ fontSize: '22px' }}>🏆</span>
          <span style={styles.navLabel}>MVP</span>
        </div>
        <div onClick={() => setTab('admin')} style={styles.navItem(tab === 'admin')}>
          <span style={{ fontSize: '22px' }}>🛡️</span>
          <span style={styles.navLabel}>Club</span>
        </div>
      </nav>
    </div>
  );
}