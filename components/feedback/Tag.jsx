import React from 'react';
export function Tag({ children, accent = 'var(--accent-violet)' }) {
  return React.createElement('span', { style: { display: 'inline-block', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 13, color: accent, background: 'var(--surface-tint)', padding: '4px 10px', borderRadius: 'var(--radius-sm)' } }, children);
}
