import React from 'react';

export default function MobileHeader({ title }) {
  return (
    <header className="mobile-header">
      <h1 style={{margin:0,fontSize:18}}>{title}</h1>
      <div style={{display:'flex',gap:8}}>
        <button aria-label="Notifications" style={{background:'transparent',border:'none',color:'var(--muted)'}}>🔔</button>
        <button aria-label="Settings" style={{background:'transparent',border:'none',color:'var(--muted)'}}>⚙️</button>
      </div>
    </header>
  );
}
