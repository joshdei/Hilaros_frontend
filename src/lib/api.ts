const API_BASE_URL = (import.meta.env.VITE_API_URL || 'https://hilaros.psalmedu.com/api').replace(/\/$/, '');

export type ApiOptions = RequestInit & { auth?: boolean };

export async function api<T = any>(path: string, options: ApiOptions = {}): Promise<T> {
  const { auth = true, headers, ...request } = options;
  const token = localStorage.getItem('hilaros_token');

  const response = await fetch(`${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`, {
    ...request,
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
  // Public / auth
  login: '/login',
  register: '/register',
  logout: '/logout',
  me: '/me',

  // Authenticated user (church) routes — all live under /user/*
  dashboard: '/user/dashboard',
  categories: '/user/categories',
  bankAccounts: '/user/bank-accounts',
  qrCode: '/user/qr-code',
  members: '/user/members',
  transactions: '/user/transactions',
  settings: '/user/settings',

  // Public giving flow
  give: (slug: string) => `/give/${encodeURIComponent(slug)}`,
  initializeGiving: (slug: string) => `/give/${encodeURIComponent(slug)}/initialize`,
  // There's no standalone "check transaction" route — Paystack's redirect
  // and the transaction-status check are the same endpoint.
  transaction: (reference: string) => `/give/callback/${encodeURIComponent(reference)}`,
  receipt: (reference: string) => `/give/receipt/${encodeURIComponent(reference)}`,

  // Admin routes — all live under /admin/*, require is_admin
  admin: {
    dashboard: '/admin/dashboard',
    siteSettings: '/admin/site-settings',
    users: '/admin/users',
    userTransactions: (userId: number | string) => `/admin/users/${userId}/transactions`,
    bankCodes: '/admin/bank-codes',
    deactivateBankCode: (id: number | string) => `/admin/bank-codes/${id}/deactivate`,
    reactivateBankCode: (id: number | string) => `/admin/bank-codes/${id}/reactivate`,
    churches: '/admin/churches',
    updateChurchStatus: (id: number | string) => `/admin/churches/${id}/status`,
    paystackSettings: '/admin/paystack-settings',
    paystackSubaccounts: '/admin/paystack-subaccounts',
    updatePaystackSubaccount: (id: number | string) => `/admin/paystack-subaccounts/${id}`,
    pendingApprovals: '/admin/pending-approvals',
    approveChurch: (id: number | string) => `/admin/pending-approvals/${id}/approve`,
    rejectChurch: (id: number | string) => `/admin/pending-approvals/${id}/reject`,
    transactions: '/admin/transactions',
  },
};