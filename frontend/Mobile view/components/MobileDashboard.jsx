import React from 'react';

function SummaryCard({label, value}){
  return (
    <div className="mobile-card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontSize:13,color:'var(--muted)'}}>{label}</div>
        <div style={{fontSize:16,fontWeight:700}}>{value}</div>
      </div>
    </div>
  )
}

export default function MobileDashboard({ setView }){
  // NOTE: This component is intentionally static so it can be integrated quickly.
  // It expects real data to be passed or hooked up to Redux in later steps.
  return (
    <section>
      <div className="mobile-card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <div style={{fontSize:12,color:'var(--muted)'}}>Current Balance</div>
            <div className="balance">$3,420.00</div>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{fontSize:12,color:'var(--muted)'}}>Month</div>
            <div style={{fontWeight:700}}>+ $420</div>
          </div>
        </div>
      </div>

      <SummaryCard label="Total Income" value="$6,200" />
      <SummaryCard label="Total Expense" value="$2,780" />

      <div className="mobile-card">
        <div style={{fontSize:13,fontWeight:700,marginBottom:6}}>Quick Actions</div>
        <div style={{display:'flex',gap:6}}>
          <button className="nav-btn" style={{flex:1,fontSize:13}} onClick={() => setView && setView('transactions')}>Add Income</button>
          <button className="nav-btn" style={{flex:1,fontSize:13}} onClick={() => setView && setView('transactions')}>Add Expense</button>
        </div>
      </div>
    </section>
  )
}
