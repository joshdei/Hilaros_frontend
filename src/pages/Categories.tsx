import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { api, endpoints } from '../lib/api';
import { ErrorBox, Loading } from '../components';

export default function Categories() {
  const [d, setD] = useState<any>();
  const [e, setE] = useState('');
  const [form, setF] = useState({ name: '', bank_account_id: '', description: '' });

  const load = () => api(endpoints.categories).then(setD).catch(x => setE(x.message));
  useEffect(() => { load() }, []);

  async function submit(x: FormEvent) {
    x.preventDefault();
    try {
      await api(endpoints.categories, { method: 'POST', body: JSON.stringify(form) });
      setF({ name: '', bank_account_id: '', description: '' });
      load();
    } catch (x: any) { setE(x.message) }
  }

  if (!d) return e ? <ErrorBox message={e} /> : <Loading />;

  const banks = d.bankAccounts || d.bank_accounts || [];

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Giving categories</h1>
          <p>Tithe, Offering, Building Fund and every other gift can route to its own account.</p>
        </div>
      </div>
      <div className="grid-2 wide-left">
        <section className="panel">
          <div className="panel-head"><h3>Add category</h3></div>
          {!banks.length ? (
            <>
              <div className="empty-state">Add a bank account before creating giving categories.</div>
              <Link className="btn-primary" to="/bank-accounts">Add bank account</Link>
            </>
          ) : (
            <form className="stack-form" onSubmit={submit}>
              <Field label="Category name">
                <input value={form.name} onChange={x => setF({ ...form, name: x.target.value })} placeholder="Tithe" required />
              </Field>
              <Field label="Route gifts to">
                <select value={form.bank_account_id} onChange={x => setF({ ...form, bank_account_id: x.target.value })} required>
                  <option value="">Select account</option>
                  {banks.map((b: any) => (
                    <option key={b.id} value={b.id}>
                      {b.account_name} - {b.bank_name} **** {String(b.account_number).slice(-4)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Description">
                <textarea rows={4} value={form.description} onChange={x => setF({ ...form, description: x.target.value })} />
              </Field>
              {e && <ErrorBox message={e} />}
              <button className="btn-primary">Create category</button>
            </form>
          )}
        </section>
        <section className="panel">
          <div className="panel-head"><h3>Active categories</h3></div>
          {(d.categories || []).map((c: any) => (
            <div className="cat-row" key={c.id}>
              <div className="cat-info">
                <span className="cat-dot" />
                <div>
                  <b>{c.name}</b>
                  <span>
                    {c.bankAccount?.bank_name || 'No account'}{' '}
                    {c.bankAccount && `**** ${String(c.bankAccount.account_number).slice(-4)}`}
                  </span>
                </div>
              </div>
              <div className="tag">{c.is_active ? 'Active' : 'Off'}</div>
            </div>
          ))}
          {!(d.categories || []).length && <div className="empty-state">No categories yet.</div>}
        </section>
      </div>
    </>
  );
}

function Field(p: any) {
  return <div className="field-group"><label>{p.label}</label>{p.children}</div>
}