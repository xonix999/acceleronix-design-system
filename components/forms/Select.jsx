import React from 'react';
export function Select({ options, value, onChange }) {
  return React.createElement('select', { value, onChange, style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--divider)', color: 'var(--ink)', background: '#fff' } },
    options.map((o) => React.createElement('option', { key: o, value: o }, o)));
}
