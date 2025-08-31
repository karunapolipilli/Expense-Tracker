import React from 'react';

const DUMMY = [
  {id:1, title:'Grocery', amount:'- $34.20', date:'2025-08-01'},
  {id:2, title:'Salary', amount:'+ $2,500', date:'2025-08-01'},
  {id:3, title:'Coffee', amount:'- $4.25', date:'2025-08-02'},
]

export default function MobileTransactions(){
  return (
    <section>
      <div className="mobile-card">
        <div style={{fontSize:14,fontWeight:700}}>Recent Transactions</div>
      </div>

      <div className="tx-list">
        {DUMMY.map(tx => (
          <div key={tx.id} className="mobile-card tx-item">
            <div>
              <div style={{fontWeight:700}}>{tx.title}</div>
              <div style={{fontSize:12,color:'var(--muted)'}}>{tx.date}</div>
            </div>
            <div className="tx-amount">{tx.amount}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
