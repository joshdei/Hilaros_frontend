import { api, endpoints } from './api';

export type User = {
  id: number;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  church_name?: string;
};

export function saveAuth(token: string, user?: User) {
  localStorage.setItem('hilaros_token', token);
  if (user) localStorage.setItem('hilaros_user', JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem('hilaros_token');
  localStorage.removeItem('hilaros_user');
}

export function getStoredUser(): User | null {
  try { return JSON.parse(localStorage.getItem('hilaros_user') || 'null'); }
  catch { return null; }
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem('hilaros_token'));
}

export async function logout() {
  try { await api(endpoints.logout, { method: 'POST' }); } finally { clearAuth(); }
}
