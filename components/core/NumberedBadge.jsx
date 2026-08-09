import React from 'react';
export function NumberedBadge({ number, accent = 'var(--accent-violet)' }) {
  return React.createElement('div', { style: { width: 36, height: 36, borderRadius: 'var(--radius-pill)', background: accent, color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--fs-label-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } }, String(number).padStart(2, '0'));
}
