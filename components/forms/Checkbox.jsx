import React from 'react';
export function Checkbox({ checked, onChange, label }) {
  return React.createElement('label', { style: { display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--ink)', cursor: 'pointer' } },
    React.createElement('input', { type: 'checkbox', checked, onChange, style: { width: 18, height: 18, accentColor: 'var(--accent-violet)' } }), label);
}
