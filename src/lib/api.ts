const API_BASE_URL = (import.meta.env.VITE_API_URL || 'https://hilaros.psalmedu.com/api').replace(/\/$/, '');

export type ApiOptions = RequestInit & { auth?: boolean };

export async function api<T = any>(path: string, options: ApiOptions = {}): Promise<T> {
  const { auth = true, headers, ...request } = options;
  const token = localStorage.getItem('hilaros_token');

  const response = await fetch(`${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`, {
    ...request,
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      ...(request.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  if (response.status === 204) return undefined as T;

  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof data === 'object' && data?.message
        ? data.message
        : typeof data === 'object' && data?.errors
          ? Object.values(data.errors).flat().join(' ')
          : `Request failed (${response.status})`;

    if (response.status === 401) {
      localStorage.removeItem('hilaros_token');
      localStorage.removeItem('hilaros_user');
    }

    throw new Error(message);
  }

  return data as T;
}

export const endpoints = {
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  me: '/auth/me',
  dashboard: '/dashboard',
  categories: '/categories',
  bankAccounts: '/bank-accounts',
  bankCodes: '/bank-codes',
  members: '/members',
  transactions: '/transactions',
  settings: '/church/profile',
  give: (slug: string) => `/give/${encodeURIComponent(slug)}`,
  initializeGiving: (slug: string) => `/give/${encodeURIComponent(slug)}/initialize`,
  transaction: (reference: string) => `/give/transaction/${encodeURIComponent(reference)}`,
  receipt: (reference: string) => `/give/receipt/${encodeURIComponent(reference)}`,
};
