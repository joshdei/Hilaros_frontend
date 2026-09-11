import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { api, endpoints } from '../lib/api';
import { ErrorBox, Loading } from '../components';

export default function BankAccounts() {
  const [d, setD] = useState<any>();
  const [e, setE] = useState('');
  const [f, setF] = useState({ account_name: '', account_number: '', bank_code: '' });

  useEffect(() => {
    api(endpoints.bankAccounts).then(setD).catch(x => setE(x.message))
  }, []);

  async function submit(x: FormEvent) {
    x.preventDefault();
    try {
      await api(endpoints.bankAccounts, { method: 'POST', body: JSON.stringify(f) });
      location.reload();
    } catch (x: any) { setE(x.message) }
  }

  if (!d) return e ? <ErrorBox message={e} /> : <Loading />;

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Bank accounts</h1>
          <p>Each account can receive one or more giving categories through the same QR code.</p>
        </div>
      </div>
      <div className="grid-2 wide-left">
        <section className="panel">
          <div className="panel-head"><h3>Add account</h3></div>
          <form className="stack-form" onSubmit={submit}>
            <Field l="Account name">
              <input value={f.account_name} onChange={x => setF({ ...f, account_name: x.target.value })} required />
            </Field>
            <Field l="Account number">
              <input value={f.account_number} onChange={x => setF({ ...f, account_number: x.target.value })} inputMode="numeric" required />
            </Field>
            <Field l="Bank code">
              <input value={f.bank_code} onChange={x => setF({ ...f, bank_code: x.target.value })} required />
            </Field>
            {e && <ErrorBox message={e} />}
            <button className="btn-primary">Add account</button>
          </form>
        </section>
        <section className="panel">
          <div className="panel-head"><h3>Connected accounts</h3></div>
          {(d.bankAccounts || d.data || []).map((a: any) => (
            <div className="account-card" key={a.id}>
              <div>
                <b>{a.account_name}</b>
                <span>{a.bank_name || a.bank_code} · **** {String(a.account_number).slice(-4)}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

function Field({ l, children }: any) {
  return <div className="field-group"><label>{l}</label>{children}</div>
}