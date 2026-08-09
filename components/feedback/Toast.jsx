import React from 'react';
export function Toast({ children, variant = 'info' }) {
  const bg = { info: 'var(--accent-indigo)', success: 'var(--green)', error: 'var(--red)' }[variant] || 'var(--accent-indigo)';
  return React.createElement('div', { style: { background: bg, color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-card)' } }, children);
}
