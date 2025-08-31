import React, { useState } from 'react';

export default function MobileAuth(){
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e){
    e.preventDefault();
    // placeholder: integrate with existing auth actions (Redux) later
    alert(`${mode} with ${email}`);
  }

  return (
    <section>
      <div className="mobile-card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontSize:16,fontWeight:700}}>{mode === 'login' ? 'Login' : 'Sign up'}</div>
          <button className="nav-btn" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>{mode === 'login' ? 'Sign up' : 'Login'}</button>
        </div>

        <form onSubmit={submit} style={{marginTop:12,display:'grid',gap:8}}>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{padding:8,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" style={{padding:8,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'var(--text)'}} />
          <button className="nav-btn" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}
