import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute, AppLayout } from './components';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import BankAccounts from './pages/BankAccounts';
import Members from './pages/Members';
import Transactions from './pages/Transactions';
import QrCode from './pages/QrCode';
import Settings from './pages/Settings';
import Give from './pages/Give';
import ThankYou from './pages/ThankYou';

const privatePage = (element: React.ReactNode) => (
  <ProtectedRoute><AppLayout>{element}</AppLayout></ProtectedRoute>
);

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/dashboard" element={privatePage(<Dashboard />)} />
    <Route path="/categories" element={privatePage(<Categories />)} />
    <Route path="/qr-code" element={privatePage(<QrCode />)} />
    <Route path="/bank-accounts" element={privatePage(<BankAccounts />)} />
    <Route path="/transactions" element={privatePage(<Transactions />)} />
    <Route path="/members" element={privatePage(<Members />)} />
    <Route path="/settings" element={privatePage(<Settings />)} />
    <Route path="/give/:slug" element={<Give />} />
    <Route path="/give/:slug/thank-you" element={<ThankYou />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
