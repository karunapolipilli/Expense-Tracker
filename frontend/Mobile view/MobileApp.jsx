import React, { useState } from 'react';
import './mobile.css';
import MobileHeader from './components/MobileHeader';
import MobileDashboard from './components/MobileDashboard';
import MobileTransactions from './components/MobileTransactions';
import MobileAuth from './components/MobileAuth';

export default function MobileApp() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="mobile-app" role="application">
      <MobileHeader title="Expense Tracker" />

      <main className="mobile-main">
        {view === 'dashboard' && <MobileDashboard setView={setView} />}
        {view === 'transactions' && <MobileTransactions />}
        {view === 'auth' && <MobileAuth />}
      </main>

      <nav className="mobile-nav" aria-label="Primary">
        <button className="nav-btn" onClick={() => setView('dashboard')}>Home</button>
        <button className="nav-btn" onClick={() => setView('transactions')}>Transactions</button>
        <button className="nav-btn" onClick={() => setView('auth')}>Account</button>
      </nav>
    </div>
  );
}
