import type { ReactNode } from 'react';
import { NavLink, Navigate, Link, useNavigate } from 'react-router-dom';
import {getStoredUser, isAuthenticated, logout } from './lib/auth';

export function Logo() {
  return <Link to="/" className="logo"><span className="mark">H</span>Hilaros</Link>;
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" replace />;
}

export function AppLayout({ children }: { children: ReactNode }) {
  const user = getStoredUser();
  const navigate = useNavigate();
  const initials = `${user?.firstName?.[0] || user?.name?.[0] || 'H'}${user?.lastName?.[0] || ''}`.toUpperCase();

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  const nav = [
    ['/dashboard', '▦', 'Dashboard'],
    ['/categories', '◈', 'Categories'],
    ['/qr-code', '▤', 'QR Code'],
    ['/bank-accounts', '⌂', 'Bank accounts'],
    ['/transactions', '₦', 'Transactions'],
    ['/members', '☰', 'Members'],
    ['/settings', '⚙', 'Settings'],
  ] as const;

  return <div className="layout">
    <aside className="sidebar">
      <Logo />
      <div className="nav-group"><div className="nav-label">Overview</div>
        <NavLink className="nav-item" to="/dashboard"><span className="ic">▦</span>Dashboard</NavLink>
      </div>
      <div className="nav-group"><div className="nav-label">Giving</div>
        {nav.slice(1,5).map(([path, icon, label]) => <NavLink key={path} className="nav-item" to={path}><span className="ic">{icon}</span>{label}</NavLink>)}
      </div>
      <div className="nav-group"><div className="nav-label">Church</div>
        {nav.slice(5).map(([path, icon, label]) => <NavLink key={path} className="nav-item" to={path}><span className="ic">{icon}</span>{label}</NavLink>)}
      </div>
      <div className="sidebar-foot">
        <div className="avatar">{initials}</div>
        <div className="who"><b>Pastor {user?.firstName || user?.name || ''} {user?.lastName || ''}</b><span>{user?.church_name || 'Church'}</span><span>User</span><button onClick={handleLogout}>Log out</button></div>
      </div>
    </aside>
    <main className="main">{children}</main>
  </div>;
}

export function Loading() { return <div className="empty-state">Loading…</div>; }
export function ErrorBox({ message }: { message: string }) { return <div className="flash-error">{message}</div>; }
export function money(amount = 0) { return `NGN ${(Number(amount) / 100).toLocaleString('en-NG', { minimumFractionDigits: 2 })}`; }
