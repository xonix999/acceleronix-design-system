import React from 'react';
export function Input({ placeholder, value, onChange, disabled }) {
  return React.createElement('input', { placeholder, value, onChange, disabled, style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--divider)', color: 'var(--ink)', outline: 'none', width: '100%', boxSizing: 'border-box' } });
}
