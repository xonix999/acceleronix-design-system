import React from 'react';
export function FlagTabCard({ label, heading, body, accent = 'var(--accent-violet)' }) {
  return React.createElement('div', { style: { background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card)', overflow: 'hidden', fontFamily: 'var(--font-sans)' } },
    React.createElement('div', { style: { background: accent, height: 10, borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' } }),
    React.createElement('div', { style: { background: accent, color: '#fff', fontWeight: 700, fontSize: 'var(--fs-label-pill)', padding: '6px 16px', marginTop: -1 } }, label),
    React.createElement('div', { style: { padding: 16 } },
      heading && React.createElement('div', { style: { fontWeight: 700, fontSize: 'var(--fs-card-heading)', color: 'var(--ink)', marginBottom: 6 } }, heading),
      React.createElement('div', { style: { fontSize: 'var(--fs-body)', color: 'var(--ink-mute)' } }, body)));
}
