import React from 'react';
export function Button({ variant = 'primary', size = 'md', disabled, children, onClick }) {
  const pad = size === 'sm' ? '8px 14px' : '12px 20px';
  const fs = size === 'sm' ? '14px' : 'var(--fs-body)';
  let bg = 'var(--accent-violet)', color = '#fff', border = 'none';
  if (variant === 'secondary') { bg = '#fff'; color = 'var(--ink)'; border = '1px solid var(--divider)'; }
  if (variant === 'ghost') { bg = 'transparent'; color = 'var(--accent-violet)'; border = 'none'; }
  return React.createElement('button', { disabled, onClick, style: { fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: fs, padding: pad, borderRadius: 'var(--radius-sm)', background: disabled ? 'var(--ink-faint)' : bg, color, border, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.6 : 1 } }, children);
}
