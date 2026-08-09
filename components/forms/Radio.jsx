import React from 'react';
export function Radio({ checked, onChange, label, name }) {
  return React.createElement('label', { style: { display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--ink)', cursor: 'pointer' } },
    React.createElement('input', { type: 'radio', name, checked, onChange, style: { width: 18, height: 18, accentColor: 'var(--accent-violet)' } }), label);
}
